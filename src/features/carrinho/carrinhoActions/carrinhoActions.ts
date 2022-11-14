import { CartItem } from "../../../@types/app/carrinhoTypes";
import CarrinhoActionTypes from "./carrinhoActionsTypes";

export const addItem = (cartItem: CartItem) => ({
  type: CarrinhoActionTypes.ADD_ITEM,
  payload: cartItem,
});

export const removeItem = (id: number) => ({
  type: CarrinhoActionTypes.REMOVE_ITEM,
  payload: id,
});

export const limparCarrinho = () => ({
  type: CarrinhoActionTypes.LIMPAR_CARRINHO,
});
