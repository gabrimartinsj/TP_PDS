import { Colecao } from "../../../@types/entities/Colecao";
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
