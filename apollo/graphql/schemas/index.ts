import fs from "fs";

export const readSchemas = fs.readFileSync('./*.gql').join('\n')
