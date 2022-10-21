import { Colecao } from "./Colecao";

export type Loja = {
  id: number;
  nome: string;
  colecoes: Colecao[];
};
