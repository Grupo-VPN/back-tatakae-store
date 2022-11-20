import { AppDataSource } from "config/database";
import { Monitoramento } from "models/Monitoramento";
import { Response, Request } from "express";
import GeracaoDeTempo from "middlewares/FormatarData";

const monitoramenteRepository = AppDataSource.getRepository(Monitoramento);

export const gerarEntrada = async (req: Request, res: Response) => {
  try {
    const { usuarioId, telaId } = req.body;
    req.body.usuarioId = usuarioId;
    req.body.telaId = telaId;
    const data = await monitoramenteRepository
      .createQueryBuilder()
      .insert()
      .into(Monitoramento)
      .values({
        usuario: usuarioId,
        tela: telaId,
        entrada: GeracaoDeTempo("horas"),
        dia: GeracaoDeTempo("dias"),
        saida: "00:00:00",
      })
      .execute();
    res.json(data.identifiers[0].id);
  } catch (error) {
    res.json(error);
  }
};

export const gerarSaida = async (req: Request, res: Response) => {
  try {
    const { idMonitoramento } = req.params;
    await monitoramenteRepository
      .createQueryBuilder()
      .update(Monitoramento)
      .set({
        saida: GeracaoDeTempo("horas"),
      })
      .where("id = :id", { id: idMonitoramento })
      .execute();
    res.json("Boa");
  } catch (error) {
    res.json(error);
  }
};

export const pegarRelatorioUmUsuario = async (req: Request, res: Response) => {
  try {
    const { idUsuario } = req.params;
    const find = await monitoramenteRepository.find({
      relations: {
        tela: true,
      },
      where: {
        usuario: {
          id: Number(idUsuario),
        },
      },
    });
    res.json(find);
  } catch (error) {}
};

export const PegarRelatorios = async (req: Request, res: Response) => {
  try {
    const find = await monitoramenteRepository.find({});
    res.json(find);
  } catch (error) {
    console.log(error);
  }
};
