import {
  gerarEntrada,
  gerarSaida,
  PegarRelatorios,
  pegarRelatorioUmUsuario,
} from "controllers/monitamento-tela";
import express from "express";
import { auth } from "middlewares/auth";
const router = express.Router();

router.use(auth);
router.post("/monitorar", gerarEntrada);
router.put("/monitorar/:idMonitoramento", gerarSaida);
router.get("/monitorar", PegarRelatorios);
router.get("/monitorar/:idUsuario", pegarRelatorioUmUsuario);

export default router;
