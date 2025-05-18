
'use client'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemon: {
          
          keyArgs: ["name"],
          
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

export function getApolloClient() {
  
  if (!apolloClient || typeof window === 'undefined') {
    apolloClient = new ApolloClient({
      uri: 'https://graphql-pokemon2.vercel.app/',
      cache,
      ssrMode: typeof window === 'undefined',
      defaultOptions: {
        query: {
          fetchPolicy: 'cache-first', 
          errorPolicy: 'all',
        },
      },
    });
  }

  return apolloClient;
}