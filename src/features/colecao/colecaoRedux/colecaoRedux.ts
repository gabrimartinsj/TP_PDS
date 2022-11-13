import { AnyAction } from "redux";
import { Loja } from "../../../@types/entities/Loja";
import ColecaoActionTypes from "../colecaoActions/colecaoActionTypes";
import ProdutoActionTypes from "../colecaoActions/colecaoActionTypes";

type colecaoTypes = {
  isFetching: boolean;
  error: string | null;
  colecao: Loja | null;
};

const colecaoInitialState: colecaoTypes = {
  isFetching: false,
  error: null,
  colecao: null,
};

const colecaoReducer = (state = colecaoInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ColecaoActionTypes.GET_COLECAO_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ColecaoActionTypes.GET_COLECAO_FAILURE:
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

    default:
      return state;
  }
};

export default colecaoReducer;
