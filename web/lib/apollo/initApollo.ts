import ApolloClient from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

import { isBrowser } from '../browser/isBrowser';

declare let global: GlobalFetch;

interface CreateApolloOptions {
  getCookies: () => string | undefined;
}

const PRODUCTION = process.env.NODE_ENV === 'production';

let apolloClient: ApolloClient<NormalizedCacheObject>;

// polyfill fetch on the server (used by ApolloClient)
if (!isBrowser) {
  global.fetch = fetch;
}

function getApolloClient(
  initialState: NormalizedCacheObject | undefined,
  options: CreateApolloOptions,
): ApolloClient<NormalizedCacheObject> {
  const cache = new InMemoryCache().restore(initialState || {});

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (!PRODUCTION) {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }

      if (networkError) {
        console.error(`[Network error]: ${networkError}`);
      }
    }
  });

  const authLink = setContext((_, { headers }) => {
    const qid = options.getCookies();

    return {
      headers: {
        ...headers,
        cookie: qid ? `qid=${qid}` : '',
      },
    };
  });

  const httpLink = new HttpLink({
    uri: PRODUCTION ? 'https://iudex.now.sh/api/graphql' : 'http://localhost:4000/graphql',
    credentials: 'include',
  });

  const client = new ApolloClient<NormalizedCacheObject>({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache,
    ssrMode: !isBrowser, // disables forceFetch on the server (so queries are only run once)
    connectToDevTools: isBrowser,
  });

  // manually initialize Apollo DevTools
  if (isBrowser) {
    client.initQueryManager();
  }

  return client;
}

export function initApollo(
  initialState: NormalizedCacheObject | undefined,
  options: CreateApolloOptions,
): ApolloClient<NormalizedCacheObject> {
  // make sure to create a new client for every server-side request so that data isn't shared between connections
  if (!isBrowser) {
    return getApolloClient(initialState, options);
  }

  // re-use ApolloClient client-side if already initialized
  if (!apolloClient) {
    apolloClient = getApolloClient(initialState, options);
  }

  return apolloClient;
}
