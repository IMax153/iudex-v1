import React, { Component } from 'react';
import { NextContext } from 'next';
import NextApp, { AppProps, DefaultAppIProps, NextAppContext } from 'next/app';
import Head from 'next/head';
import { DefaultQuery } from 'next/router';
import { getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

import { isBrowser } from '../browser/isBrowser';
import { parseCookies } from '../browser/cookies';
import { getDisplayName } from '../getDisplayName';
import { initApollo } from './initApollo';

interface WithApolloProps<TCache> {
  apolloState: TCache;
}

export interface AppContext<Q extends DefaultQuery = DefaultQuery> extends NextContext<Q> {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

export interface ApolloContext<Q extends DefaultQuery = DefaultQuery> extends NextAppContext<Q> {
  ctx: AppContext<Q>;
}

const PRODUCTION = process.env.NODE_ENV === 'production';

export function withApollo(App: typeof NextApp) {
  return class Apollo extends Component<
    WithApolloProps<NormalizedCacheObject> & DefaultAppIProps & AppProps
  > {
    static displayName = `withApollo(${getDisplayName(App)})`;

    static async getInitialProps(context: ApolloContext) {
      const { Component, router, ctx } = context;
      const apollo = initApollo(undefined, { getCookie: () => parseCookies(ctx.req).qid });

      ctx.apolloClient = apollo;

      let appProps = { pageProps: {} };
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(context);
      }

      if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
        // When redirecting, the response is finished so we don't need to continue to render
        return {};
      }

      if (!isBrowser) {
        // Run all graphql queries in the component tree and extract the resulting data
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App {...appProps} Component={Component} router={router} apolloClient={apollo} />,
          );
        } catch (error) {
          if (!PRODUCTION) {
            // prevent ApolloClient GraphQL errors from crashing SSR, handle them in components via the data.error prop
            // (https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error)
            console.error('Error while running `getDataFromTree`', error);
          }
        }

        // getDataFromTree does not call componentWillUnmount head side effect, must clear it manually
        Head.rewind();
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props: WithApolloProps<NormalizedCacheObject> & AppProps & DefaultAppIProps) {
      super(props);
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient = initApollo(props.apolloState, {
        getCookie: () => {
          return parseCookies().qid;
        },
      });
    }

    public apolloClient: ApolloClient<NormalizedCacheObject>;

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
}
