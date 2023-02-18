import { schema } from './graphql/schema'
import { graphql } from 'graphql'

export default async function queryGraphql(query, variableValues = {}) {
  const { data } = await graphql({ schema, source: query, variableValues})
  return data || {}
}