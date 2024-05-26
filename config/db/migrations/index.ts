import { MigrationInterface } from 'typeorm'
import * as stackMigrations from './migrationsStacker'

export const migrations = new Array<Function>()
Object.keys(stackMigrations).map(k => {
  migrations.push(stackMigrations[k])
});
