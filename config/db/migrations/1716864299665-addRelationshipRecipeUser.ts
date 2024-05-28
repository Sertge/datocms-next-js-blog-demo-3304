import Recipe from "domain/Recipe";
import User from "domain/User";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AddRelationshipRecipeUser1716864299665 implements MigrationInterface {
  private  readonly Pkname = 'fk_recipe_user'
  private readonly recipeTable = new Table(Recipe)
  private readonly userTable = new Table(User)
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(this.recipeTable.name, new TableForeignKey({columnNames: ["user"], referencedColumnNames: ["id"], referencedTableName: this.userTable.name, name:this.Pkname}))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(this.recipeTable, this.Pkname)
  }

}
