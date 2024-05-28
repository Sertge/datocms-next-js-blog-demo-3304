import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import User from "./User";

@Entity('Recipe')
export default class Recipe {
  @PrimaryGeneratedColumn('uuid')
    id!:string
  
  // @ManyToOne(() => User, (user) => user.recipes)
  @Column({nullable:false})
    user!: 'string'

  @Column({nullable: false})
    name!: string

  @CreateDateColumn({nullable: false})
    createdAt!: Date

  @UpdateDateColumn({nullable: false})
    updatedAt!: Date
}

export interface ICreateRecipeInteractorInput {
  recipeName: string
  owner: string
}