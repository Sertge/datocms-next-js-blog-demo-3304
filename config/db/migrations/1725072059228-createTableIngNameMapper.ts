import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import Ingredient from "domain/Ingredient";

export class CreateTableIngNameMapper1725072059228 implements MigrationInterface {
  private readonly tableName = 'IngNameMapper'
  private readonly PkName = 'fk_ingnamemapper_ingredient'
  private readonly table = new Table({
    name: this.tableName,
    columns: [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        default: 'gen_random_uuid()'
      },
      {
        name:'name',
        type: 'varchar',
        isNullable: false,
        isUnique: true
      },
      {
        name:'provName',
        type: 'varchar',
        isNullable: false,
        isUnique: true
      },
      {
        name: 'ingredient',
        type: 'uuid',
        isNullable: true,
        isUnique: true
      }
    ]
  })

  private readonly ingredientTable = new Table(Ingredient)

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ["ingredient"],
        referencedColumnNames: ["id"],
        referencedTableName: this.ingredientTable.name,
        name: this.PkName
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.table, this.PkName)
    await queryRunner.dropTable(this.table)
  }

}
