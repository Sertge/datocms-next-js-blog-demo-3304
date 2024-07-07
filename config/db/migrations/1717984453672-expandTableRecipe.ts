import Recipe from "domain/Recipe";
import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class ExpandTableRecipe1717984453672 implements MigrationInterface {
    private readonly recipeTable = new Table(Recipe)
    private readonly newColumns = [
        new TableColumn({
            name:'isExpandable',
            type: 'boolean',
            isNullable: false,
            default: false
        }),
        new TableColumn({
            name:'servings',
            type: 'int4',
            isNullable: false,
            default: 1
        }),
        new TableColumn({
            name:'prepTime',
            type: 'float',
            isNullable: true,
        }),
        new TableColumn({
            name:'estPrice',
            type: 'float',
            isNullable: false,
            default: 0
        })
    ]
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(this.recipeTable, this.newColumns)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns(this.recipeTable, this.newColumns)
    }

}
