import { SchemaLink } from '@apollo/client/link/schema'
import { HttpLink } from '@apollo/client/link/http'
import { schema } from './graphql/schema'
import merge from 'deepmerge'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createIsomorphLink() {
  if (typeof window === 'undefined') {
    return new SchemaLink({ schema })
  } else {
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    })
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState:NormalizedCacheObject | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    const existingCache = _apolloClient.extract()
    const data = merge(initialState, existingCache)
    _apolloClient.cache.restore(data)
  }
  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}