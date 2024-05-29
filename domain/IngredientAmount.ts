import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export interface IIngredientAmount {
  id: string
  unitMeasure: string
  amount: number
  createdAt: Date
  updatedAt: Date
}

@Entity('IngredientAmount')
export default class IngredientAmount {
  @PrimaryGeneratedColumn('uuid')
    id!:string
  
  // @ManyToOne('User', 'recipes')
  //   user!: IUser

  @Column({nullable: false})
  unitMeasure!: string

  @Column({nullable: false})
  amount!: number

  @CreateDateColumn({nullable: false})
    createdAt!: Date

  @UpdateDateColumn({nullable: false})
    updatedAt!: Date
}

export interface ICreateIngredientAmountInteractorInput {
  name: string
  unitMeasure: string
  amount: number
}