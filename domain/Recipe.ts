import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import type { IUser } from "./User";
import type { IIngredientAmount } from "./IngredientAmount";

export interface IRecipe {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
}

@Entity('Recipe')
export default class Recipe {
  @PrimaryGeneratedColumn('uuid')
    id!:string
  
  @ManyToOne('User', 'recipes')
    user!: IUser

  @Column({nullable: false})
    name!: string

  @OneToMany('IngredientAmount', 'recipe')
    ingredientAmounts: IIngredientAmount[]

  @Column({nullable:true, default: true})
    isExpandable: boolean

  @Column({nullable:false})
    servings!: number

  @Column({nullable: false})
    prepTime: number

  @Column({nullable: true, default: 0})
    estPrice: number

  @CreateDateColumn({nullable: false})
    createdAt!: Date

  @UpdateDateColumn({nullable: false})
    updatedAt!: Date
}

export interface ICreateRecipeInteractorInput {
  name: string
  user: IUser
}