import axios from 'axios'
import { readFileSync, writeFileSync} from 'fs'
import glob from 'glob'

function readSchemas() {
  const foundSchemas = new glob.Glob(
    './apollo/graphql/schemas/*.gql',
    { sync: true }
  ).found
  const schemas = foundSchemas.map((gqlSchema) => readFileSync(gqlSchema)).join('\n')
  return schemas
}

function exportSchemasToFauna() {
  const schemas = readSchemas()
  writeFileSync('./faunaSchema.gql', schemas)
  // axios.post(
  //   process.env.FAUNA_IMPORT_URL,
  //   { body: { schemas }},
  //   { auth: { username: process.env.FAUNA_SECRET }}
  // ).then((res) => console.log(res))
}

exportSchemasToFauna()