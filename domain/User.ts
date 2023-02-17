import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export default class User {
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

export declare interface ICreateUserInteractorInput {
  firstName: string
  lastName: string
} 