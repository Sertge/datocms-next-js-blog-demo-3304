import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import type { IIngredient } from "./Ingredient";

export interface IIngNameMapper {
  id: string
  name: string
  provName: string
}

@Entity('IngNameMapper')
class IngNameMapper {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ nullable: false, type: "varchar" })
  name!: string

  @Column({ nullable: false, type: "varchar" })
  provName!: string

  @OneToOne('Ingredient', null, { nullable: true })
  @JoinColumn()
  ingredient: IIngredient
}

export default IngNameMapper