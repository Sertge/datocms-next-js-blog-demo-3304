import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { schema } from 'apollo/graphql/schema'

const apolloServer = new ApolloServer({
  schema
})

export default startServerAndCreateNextHandler(apolloServer)