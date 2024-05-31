import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddTableRecipe1716769214041 implements MigrationInterface {
  private readonly tableName = 'Recipe'
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
          name: 'user',
          type: 'uuid',
          isNullable: false
        },
        {
          name: 'ingredientAmounts',
          type: 'uuid',
          isNullable: true
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName)
  }

}
