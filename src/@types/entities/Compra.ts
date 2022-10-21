import { Produto } from "./Produto";

export type Compra = {
  id: number;
  produtos: Produto[];
  totalSemDesconto: number;
  totalFinal: number;
};
