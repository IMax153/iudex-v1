import { ApolloClient } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

import { MeDocument, MeQuery, MeQueryVariables } from '../../generated/graphql';

export async function checkLoggedIn(client: ApolloClient<NormalizedCacheObject>) {
  try {
    const { data } = await client.query<MeQuery, MeQueryVariables>({ query: MeDocument });
    if (data && data.me) return { user: data.me };
    return { user: null };
  } catch (error) {
    return { user: null };
  }
}
