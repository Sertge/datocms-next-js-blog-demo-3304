import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import IngredientAmount from "domain/IngredientAmount";
export class CreateTableIngredient1717128995039 implements MigrationInterface {
  private readonly tableName = 'Ingredient'
  private readonly PkName = 'fk_ingredient_ingredientamount'
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
        name: 'price',
        type: 'int8',
        isNullable: false
      },
      {
        name: 'lossPercent',
        type: 'int4',
        isNullable: false
      },
      {
        name: 'unitMeasure',
        type: 'varchar',
        isNullable: false
      }
    ]
  })
  private readonly ingredientAmountTable = new Table(IngredientAmount)
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
    await queryRunner.createForeignKey(
      this.ingredientAmountTable,
      new TableForeignKey({
        columnNames: ["ingredient"],
        referencedColumnNames: ["id"],
        referencedTableName: this.table.name,
        name: this.PkName
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.ingredientAmountTable, this.PkName)
    await queryRunner.dropTable(this.tableName)
  }

}
