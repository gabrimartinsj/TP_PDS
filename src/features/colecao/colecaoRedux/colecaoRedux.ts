import { AnyAction } from "redux";
import { Colecao } from "../../../@types/entities/Colecao";
import { Loja } from "../../../@types/entities/Loja";
import { Produto } from "../../../@types/entities/Produto";
import ColecaoActionTypes from "../colecaoActions/colecaoActionTypes";
import ProdutoActionTypes from "../colecaoActions/colecaoActionTypes";

type colecaoTypes = {
  isFetching: boolean;
  error: string | null;
  colecao: Colecao | null;
  colecoes: Colecao[] | null;
  produtos: Produto[] | null;
};

const colecaoInitialState: colecaoTypes = {
  isFetching: false,
  error: null,
  colecao: null,
  colecoes: [],
  produtos: [],
};

const colecaoReducer = (state = colecaoInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ColecaoActionTypes.GET_COLECAO_START:
    case ColecaoActionTypes.GET_COLECAO_DE_LOJA_START:
    case ColecaoActionTypes.GET_PRODUTOS_DE_COLECAO_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ColecaoActionTypes.GET_COLECAO_FAILURE:
    case ColecaoActionTypes.GET_COLECAO_DE_LOJA_FAILURE:
    case ColecaoActionTypes.GET_PRODUTOS_DE_COLECAO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: null,
      };

    case ColecaoActionTypes.GET_COLECAO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        colecao: payload,
      };
    case ColecaoActionTypes.GET_COLECAO_DE_LOJA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        colecoes: payload,
      };

    case ColecaoActionTypes.GET_PRODUTOS_DE_COLECAO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        produtos: payload,
      };

    default:
      return state;
  }
};

export default colecaoReducer;
