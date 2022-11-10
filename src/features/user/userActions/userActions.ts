import { Compra } from "../../../@types/entities/Compra";
import { Usuario } from "../../../@types/entities/Usuario";
import UserActionTypes from "./userActionTypes";

export const login = (user: Usuario) => ({
  type: UserActionTypes.LOGIN,
  payload: user,
});

export const logout = () => ({
  type: UserActionTypes.LOGOUT,
});

export const finalizarCompraStart = (compra: Compra) => ({
  type: UserActionTypes.FINALIZAR_COMPRA_START,
  payload: compra,
});

export const finalizarCompraSuccess = (bool: boolean) => ({
  type: UserActionTypes.FINALIZAR_COMPRA_SUCCESS,
  payload: bool,
});

export const finalizarCompraFailure = (error: string) => ({
  type: UserActionTypes.FINALIZAR_COMPRA_FAILURE,
  payload: error,
});

export const recuperarComprasStart = (compra: Compra) => ({
  type: UserActionTypes.RECUPERAR_COMPRAS_START,
  payload: compra,
});

export const recuperarComprasSuccess = (compras: Compra[]) => ({
  type: UserActionTypes.RECUPERAR_COMPRAS_SUCCESS,
  payload: compras,
});

export const recuperarComprasFailure = (error: string) => ({
  type: UserActionTypes.RECUPERAR_COMPRAS_FAILURE,
  payload: error,
});

export const getInformacaoPessoalStart = (id: number) => ({
  type: UserActionTypes.GET_INFORMACAO_PESSOAL_START,
  payload: id,
});

export const getInformacaoPessoalSuccess = (info: any) => ({
  type: UserActionTypes.GET_INFORMACAO_PESSOAL_SUCCESS,
  payload: info,
});

export const getInformacaoPessoalFailure = (error: string) => ({
  type: UserActionTypes.GET_INFORMACAO_PESSOAL_FAILURE,
  payload: error,
});
