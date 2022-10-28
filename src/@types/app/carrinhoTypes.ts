import { Produto } from "../entities/Produto";

export type Cart = {
  itens: CartItem[];
  total: number;
};

export type CartItem = {
  produto: Produto;
  quantidade: number;
};
