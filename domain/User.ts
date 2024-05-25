import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export interface UserData {
    id: string
    firstName: string
    lastName: string
    createdAt: Date
    updatedAt: Date
}

@Entity('users')
export default class User implements UserData {
  @PrimaryGeneratedColumn('uuid')
    id!: string
  
  @Column({ nullable: false })
    firstName!: string

  @Column({ nullable: false })
    lastName!: string

  @CreateDateColumn({ nullable: false })
    createdAt!: Date
  @UpdateDateColumn({ nullable: false })
    updatedAt!: Date
}

export interface ICreateUserInteractorInput {
  firstName: string
  lastName: string
}