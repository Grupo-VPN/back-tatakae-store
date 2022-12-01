import express from "express";
import cors from "cors";
import "config/dotenv";
import { AppDataSource } from "./config/database";
import { dadosIniciais } from "config/geracao";
import monitoramento from "routes/monitoramento";
import usuario from "routes/usuario";

const app = express();

try {
  AppDataSource.initialize().then(async () => {
    console.log("Banco criado com sucesso");
        dadosIniciais();
  });
} catch (error) {
  console.log(`Connection error ${error}`);
}

app.use(cors());
app.use(express.json());
app.use("/", usuario, monitoramento);

app.listen(5000, () => console.log("Serve conectado"));
