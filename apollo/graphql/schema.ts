import { makeExecutableSchema } from '@graphql-tools/schema'
import { GraphQLSchema } from 'graphql'
import readSchemas from './schemas'
import * as resolvers from './resolvers'
import datasource from 'config/db/datasources/postgres'
import { DataSource } from 'typeorm'
import Container from 'typedi'

Container.set(DataSource.name, datasource)
export const schema: GraphQLSchema = makeExecutableSchema({ typeDefs: readSchemas(), resolvers })
