import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import Recipe from "domain/Recipe";
export class CreateTableIngredientAmounts1717125251587 implements MigrationInterface {
  private readonly tableName = 'IngredientAmount'
  private readonly PkName = 'fk_ingredientamount_recipe'
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
        name: 'recipe',
        type: 'uuid',
        isNullable: false
      },
      {
        name: 'ingredient',
        type: 'uuid',
        isNullable: false
      },
      {
        name: 'unit',
        type: 'varchar',
        isNullable: false
      },
      {
        name: 'amount',
        type: 'int8',
        isNullable: false
      },
      {
        name: 'unitMeasure',
        type: 'varchar',
        isNullable: false
      }
    ]
  })
  private readonly recipeTable = new Table(Recipe)
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        columnNames: ["recipe"],
        referencedColumnNames: ["id"],
        referencedTableName: this.recipeTable.name,
        name: this.PkName
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName)
    await queryRunner.dropForeignKey(this.table, this.PkName)
  }

}
