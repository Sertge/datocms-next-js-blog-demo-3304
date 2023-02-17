import { makeExecutableSchema } from "@graphql-tools/schema"
import { GraphQLSchema } from "graphql"
import { readSchemas } from "./schemas"
import { Mutation } from "./resolvers"


export const schema: GraphQLSchema = makeExecutableSchema({ typeDefs: readSchemas, resolvers: { Mutation } })
