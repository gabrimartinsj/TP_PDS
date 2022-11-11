import { AnyAction } from "redux";
import { Loja } from "../../../@types/entities/Loja";
import ProdutoActionTypes from "../produtoActions/produtoActionTypes";

type produtoTypes = {
  isFetching: boolean;
  error: string | null;
  produto: Loja | null;
};

const produtoInitialState: produtoTypes = {
  isFetching: false,
  error: null,
  produto: null,
};

const produtoReducer = (state = produtoInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ProdutoActionTypes.GET_PRODUTO_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ProdutoActionTypes.GET_PRODUTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: null,
      };

    case ProdutoActionTypes.GET_PRODUTO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        produto: payload,
      };

    default:
      return state;
  }
};

export default produtoReducer;
