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
  
  @OneToMany('IngredientAmount', 'ingredients')
    ingredientAmounts!: IIngredientAmount[]
  @Column({nullable: false})
    name!: string

  @Column({nullable: false})
  price!: number

  @Column({nullable: false})
  unitMeasure!: string

  @Column({nullable:false})
  lossPercent!: number

  @Column({nullable: false, type: 'decimal', precision: 2})
  packSize!: number

  @Column({nullable: false})
  packPrice!: number

  @CreateDateColumn({nullable: false})
    createdAt!: Date

  @UpdateDateColumn({nullable: false})
    updatedAt!: Date
}

export interface ICreateIngredientInteractorInput {
  name: string
  price: number
  lossPercent: number
  unitMeasure: string
}