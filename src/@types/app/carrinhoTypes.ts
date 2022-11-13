import { Produto } from "../entities/Produto";

export type Cart = {
  itens: CartItem[];
  totalBruto: number;
  frete: number;
  servicos: number;
  desconto: number;
  total: number;
};

export type CartItem = {
  id: number;
  nome: string;
  image: string;
  preco: number;
  desconto: number;
  quantidade: number;
};
