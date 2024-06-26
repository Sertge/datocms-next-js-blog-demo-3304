import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import User from 'domain/User'
import Recipe from 'domain/Recipe'
import { migrations } from 'config/db/migrations/index'

const datasource = new DataSource({
  type: 'postgres',
  host: process.env.DB_URI,
  port: 5432,
  migrationsRun: true,
  synchronize: true,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: [...migrations],
  namingStrategy: new SnakeNamingStrategy(),
  entities: [User, Recipe],
  logging: ['query', 'migration', 'error']
})

datasource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

export default datasource
