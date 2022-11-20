import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tela } from "./Tela";
import { Usuario } from "./Usuario";

@Entity()
export class Monitoramento {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;
  @Column({
    type: "time",
  })
  entrada?: Date;
  @Column({
    type: "time",
  })
  saida?: Date;
  @Column({
    type: "date",
  })
  dia?: Date;
  @ManyToOne(() => Usuario, (id) => id.controle)
  @JoinColumn({
    name: "usuario",
  })
  usuario!: Usuario[];
  @ManyToOne(() => Tela, (id) => id.controle)
  @JoinColumn({
    name: "tela",
  })
  tela!: Tela[];
}
