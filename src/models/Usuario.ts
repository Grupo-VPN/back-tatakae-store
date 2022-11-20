import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Monitoramento } from "./Monitoramento";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;
  @Column({
    type: "varchar",
  })
  senha?: string;
  @Column({
    type: "varchar",
  })
  email?: string;
  @OneToMany(() => Monitoramento, (monitoramento) => monitoramento.tela)
  controle?: Monitoramento;
}
