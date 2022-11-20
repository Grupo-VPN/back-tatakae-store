import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Monitoramento } from "./Monitoramento";

@Entity()
export class Tela {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;
  @Column({
    type: "varchar",
  })
  nome?: string;
  @OneToMany(() => Monitoramento, (monitoramento) => monitoramento.tela)
  controle?: Monitoramento;
}
