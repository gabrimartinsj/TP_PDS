import { Loja } from "../../../@types/entities/Loja";

export const getLojaStart = (id: number) => ({
  type: LojaActionTypes.GET_LOJA_START,
  payload: id,
});

export const getLojaSuccess = (loja: Loja) => ({
  type: LojaActionTypes.GET_LOJA_SUCCESS,
  payload: loja,
});

export const getLojaFailure = (error: string) => ({
  type: LojaActionTypes.GET_LOJA_FAILURE,
  payload: error,
});
