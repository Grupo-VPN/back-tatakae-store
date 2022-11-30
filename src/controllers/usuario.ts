import { Response, Request } from "express";
import { AppDataSource } from "config/database";
import { Usuario } from "models/Usuario";
import "config/dotenv";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { gerarEntrada } from "./monitamento-tela";

const usuarioRepositorio = AppDataSource.getRepository(Usuario);
export const loginUser = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  const user = await usuarioRepositorio.find({
    where: {
      email,
    },
  });
  if (user.length == 1) {
    if (await bcrypt.compare(senha, user[0].senha as string)) {
      const token = jwt.sign(
        { id: user[0].id },
        process.env.APP_SECRET as string,
        {
          expiresIn: "1D",
        }
      );
      const data = {
        ...user[0],
        token,
      };
      return res.json(data);
    } else {
      return res.status(404).json({ message: "Senha incorreta" });
    }
  } else {
    return res.status(404).json({ message: "E-mail incorreto" });
  }
};
