import { Colecao } from "../../../@types/entities/Colecao";
import { Produto } from "../../../@types/entities/Produto";
import ColecaoActionTypes from "./colecaoActionTypes";

export const getColecaoStart = (id: number) => ({
  type: ColecaoActionTypes.GET_COLECAO_START,
  payload: id,
});

export const getColecaoSuccess = (colecao: Colecao) => ({
  type: ColecaoActionTypes.GET_COLECAO_SUCCESS,
  payload: colecao,
});

export const getColecaoFailure = (error: string) => ({
  type: ColecaoActionTypes.GET_COLECAO_FAILURE,
  payload: error,
});

export const getColecaoDeLojaStart = (idLoja: number) => ({
  type: ColecaoActionTypes.GET_COLECAO_DE_LOJA_START,
  payload: idLoja,
});

export const getColecaoDeLojaSuccess = (colecoes: Colecao[]) => ({
  type: ColecaoActionTypes.GET_COLECAO_DE_LOJA_SUCCESS,
  payload: colecoes,
});

export const getColecaoDeLojaFailure = (error: string) => ({
  type: ColecaoActionTypes.GET_COLECAO_DE_LOJA_FAILURE,
  payload: error,
});

export const getProdutosDeColecaoStart = (idColecao: number) => ({
  type: ColecaoActionTypes.GET_PRODUTOS_DE_COLECAO_START,
  payload: idColecao,
});

export const getProdutosDeColecaoSuccess = (produtos: Produto[]) => ({
  type: ColecaoActionTypes.GET_PRODUTOS_DE_COLECAO_SUCCESS,
  payload: produtos,
});

export const getProdutosDeColecaoFailure = (error: string) => ({
  type: ColecaoActionTypes.GET_PRODUTOS_DE_COLECAO_FAILURE,
  payload: error,
});
