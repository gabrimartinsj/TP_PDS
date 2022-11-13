import { Produto } from "../../../@types/entities/Produto";
import ProdutoActionTypes from "./produtoActionTypes";

export const getProdutoStart = (id: number) => ({
  type: ProdutoActionTypes.GET_PRODUTO_START,
  payload: id,
});

export const getProdutoSuccess = (produto: Produto) => ({
  type: ProdutoActionTypes.GET_PRODUTO_SUCCESS,
  payload: produto,
});

export const getProdutoFailure = (error: string) => ({
  type: ProdutoActionTypes.GET_PRODUTO_FAILURE,
  payload: error,
});
