import path from 'path'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import Glob from 'glob'
import User from 'domain/User'

const datasource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URI,
  migrationsRun: true,
  synchronize: true,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'cocina_con_ale',
  //migrations: ['config/db/migrations/*.[jt]s'],
  namingStrategy: new SnakeNamingStrategy(),
  entities: [User],
  logging: ['query', 'migration', 'error']
})

datasource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

const finderExplore = Glob('config/db/migrations/*.[jt]s', (e, matches) => console.log(matches))

export default datasource
