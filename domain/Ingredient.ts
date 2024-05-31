import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import type { IIngredientAmount } from "./IngredientAmount";

export interface IIngredient {
  id: string
  name: string
  price: number
  unitMeasure: string
  createdAt: Date
  updatedAt: Date
}

@Entity('Ingredient')
export default class Ingredient {
  @PrimaryGeneratedColumn('uuid')
    id!:string
  
  @ManyToOne('IngredientAmount', 'ingredients')
    ingredientAmount!: IIngredientAmount

  @Column({nullable: false})
    name!: string

  @Column({nullable: false})
  price!: number

  @Column({nullable: false})
  unitMeasure!: string

  @CreateDateColumn({nullable: false})
    createdAt!: Date

  @UpdateDateColumn({nullable: false})
    updatedAt!: Date
}

export interface ICreateIngredientInteractorInput {
  name: string
  price: number
  unitMeasure: string
}