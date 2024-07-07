import Ingredient from "domain/Ingredient";
import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";


export class ExpandTableIngredients1717976685782 implements MigrationInterface {
    private readonly ingredientTable = new Table(Ingredient)
    private readonly newColumns = [
        new TableColumn({
            name:'packPrice',
            type: 'int4',
            isNullable: false,
            default: 2500
        }),
        new TableColumn({
            name:'packSize',
            type: 'float',
            isNullable: false,
            default: 1.00
        })
    ]
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(this.ingredientTable, this.newColumns)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns(this.ingredientTable, this.newColumns)
    }
}
