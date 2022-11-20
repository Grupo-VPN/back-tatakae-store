import "reflect-metadata";
import "../config/dotenv";

import { DataSource } from "typeorm";
import { Monitoramento } from "models/Monitoramento";
import { Tela } from "models/Tela";
import { Usuario } from "models/Usuario";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [Monitoramento, Tela, Usuario],
  migrations: [],
  subscribers: [],
});
