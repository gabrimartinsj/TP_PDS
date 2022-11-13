import { Loja } from "./Loja";
import { Produto } from "./Produto";

export type Colecao = {
  nome: string;
  produtos: Produto[];
  loja: Loja;
};
