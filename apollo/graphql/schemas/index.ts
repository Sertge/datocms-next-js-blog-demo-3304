import { readFileSync} from 'fs'
import { Glob } from 'glob'

function readSchemas(): string {
  let schemas: string
  const foundSchemas = new Glob(
    './apollo/graphql/schemas/*.gql',
    {sync:true}
  ).found
  schemas = foundSchemas.map((gqlSchema: string) => readFileSync(gqlSchema)).join('\n')
  return schemas
}

export default readSchemas
