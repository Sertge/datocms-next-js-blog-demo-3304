import path from 'path'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const datasource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URI,
  migrationsRun: true,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'cocina_con_ale',
  migrations: ['config/db/migrations/*.[jt]s'],
  namingStrategy: new SnakeNamingStrategy(),
  entities: ['domain/**/*.[jt]s'],
  logging: ['query', 'migration', 'error']
})

export default datasource
