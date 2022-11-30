import { Tela } from "models/Tela";
import { Usuario } from "models/Usuario";
import { AppDataSource } from "./database";
import * as bcrypt from "bcrypt";

export async function dadosIniciais() {
  const usuarioRepository = AppDataSource.getRepository(Usuario);
  const telaRepositorio = AppDataSource.getRepository(Tela);
  try {
    const passwordHash = await bcrypt.hash("tatakae", 8);
    await usuarioRepository
      .createQueryBuilder()
      .insert()
      .into(Usuario)
      .values([
        {
          email: "tatakae@tatakae.com",
          senha: passwordHash,
        },
        {
          email: "lucas@tatakae.com",
          senha: passwordHash,
        },
        {
          email: "gabriel@tatakae.com",
          senha: passwordHash,
        },
        {
          email: "vini@tatakae.com",
          senha: passwordHash,
        },
      ])
      .execute();
    await telaRepositorio
      .createQueryBuilder()
      .insert()
      .into(Tela)
      .values([
        { nome: "Tela de Home" },
        { nome: "Tela de Produtos" },
        { nome: "Tela de Produto" },
        { nome: "Tela de Carrinho" },
        { nome: "Tela de Pagamento" },
      ])
      .execute();
  } catch (error) {}
}
