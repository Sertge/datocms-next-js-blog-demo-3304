import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Recipe from "./Recipe";

export interface UserData {
    id: string
    firstName: string
    lastName: string
    createdAt: Date
    updatedAt: Date
}

@Entity('User')
export default class User implements UserData {
  @PrimaryGeneratedColumn('uuid')
    id!: string
  
  @Column({ nullable: false })
    firstName!: string

  @Column({ nullable: false })
    lastName!: string

  @OneToMany(() => Recipe, (recipe) => recipe.user)
  recipes: Recipe[]

  @CreateDateColumn({ nullable: false })
    createdAt!: Date
  @UpdateDateColumn({ nullable: false })
    updatedAt!: Date
}

export interface ICreateUserInteractorInput {
  firstName: string
  lastName: string
}