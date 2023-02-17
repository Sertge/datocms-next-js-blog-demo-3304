import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class addTableUsers1676599296160 implements MigrationInterface {
  private readonly tableName = 'users'
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: this.tableName,
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          default: 'gen_random_uuid()'
        },
        {
          name: 'first_name',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'last_name',
          type: 'varchar',
          isNullable: false
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName)
  }

}
