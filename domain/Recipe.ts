import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('recipes')
export default class Recipe {
  @PrimaryGeneratedColumn('uuid')
    id!:string
  
  @Column({nullable: false})
    user!: string

  @Column({nullable: false})
    name!: string

  @Column({nullable: true})
  ingredientAmounts: Array<string>

  @CreateDateColumn({nullable: false})
    createdAt!: Date

  @UpdateDateColumn({nullable: false})
    updatedAt!: Date
}

export interface ICreateRecipeInteractorInput {
  recipeName: string
  owner: string
}