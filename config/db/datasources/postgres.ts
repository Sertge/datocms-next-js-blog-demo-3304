import path from 'path'
import Container from 'typedi'
import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

const datasource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URI,
  migrationsRun: true,
  username: 'Sertge',
  password: 'sertge',
  migrations: [path.join(__dirname, '../migrations/*.[jt]s')],
  namingStrategy: new SnakeNamingStrategy(),
  entities: [path.join(__dirname, '../../../domain/**/*.[jt]s')],
  logging: ['query', 'migration', 'error']
})

Container.set(DataSource.name, datasource)

export default datasource
