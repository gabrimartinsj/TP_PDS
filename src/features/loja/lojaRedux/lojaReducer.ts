import { AnyAction } from "redux";
import { Loja } from "../../../@types/entities/Loja";
import LojaActionTypes from "../lojaActions/lojaActionTypes";
         
type lojaTypes = {
  isFetching: boolean;
  error: string | null;
  loja: Loja | null;
};

const lojaInitialState: lojaTypes = {
  isFetching: false,
  error: null,
  loja: null,
};

const lojaReducer = (state = lojaInitialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case LojaActionTypes.GET_LOJA_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case LojaActionTypes.GET_LOJA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: null,
      };

    case LojaActionTypes.GET_LOJA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        loja: payload,
      };

    default:
      return state;
  }
};

export default lojaReducer;
