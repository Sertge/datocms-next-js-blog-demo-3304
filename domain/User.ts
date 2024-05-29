import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import type { IRecipe } from "./Recipe";

export interface IUser {
    id: string
    firstName: string
    lastName: string
    createdAt: Date
    updatedAt: Date
}

@Entity('User')
export default class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
    id!: string
  
  @Column({ nullable: false })
    firstName!: string

  @Column({ nullable: false })
    lastName!: string

  @OneToMany('Recipe', 'user')
  recipes: IRecipe[]

  @CreateDateColumn({ nullable: false })
    createdAt!: Date
  @UpdateDateColumn({ nullable: false })
    updatedAt!: Date
}

export interface ICreateUserInteractorInput {
  firstName: string
  lastName: string
}