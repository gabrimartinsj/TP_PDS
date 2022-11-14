import { AnyAction } from "redux";
import { Loja } from "../../../@types/entities/Loja";
import { Produto } from "../../../@types/entities/Produto";
import ProdutoActionTypes from "../produtoActions/produtoActionTypes";

type produtoTypes = {
  isFetching: boolean;
  error: string | null;
  produto: Produto | null;
  produtos: Produto[] | null;
};

const produtoInitialState: produtoTypes = {
  isFetching: false,
  error: null,
  produto: null,
  produtos: [],
};

const produtoReducer = (state = produtoInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case ProdutoActionTypes.GET_PRODUTO_START:
    case ProdutoActionTypes.GET_PRODUTOS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ProdutoActionTypes.GET_PRODUTO_FAILURE:
    case ProdutoActionTypes.GET_PRODUTOS_FAILURE:
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

    case ProdutoActionTypes.GET_PRODUTOS_SUCCESS:
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

export default produtoReducer;
