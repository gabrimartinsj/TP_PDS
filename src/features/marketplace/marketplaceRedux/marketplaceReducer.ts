import { AnyAction } from "redux";
import { Loja } from "../../../@types/entities/Loja";
import { Usuario } from "../../../@types/entities/Usuario";
import MarketplaceActionTypes from "../marketplaceActions/marketplaceActionTypes";

type marketplaceTypes = {
  isFetching: boolean;
  error: string | null;
  lojas: Loja[] | null;
};

const marketplaceInitialState: marketplaceTypes = {
  isFetching: false,
  error: null,
  lojas: null,
};

const marketplaceReducer = (
  state = marketplaceInitialState,
  action: AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case MarketplaceActionTypes.GET_LOJAS_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case MarketplaceActionTypes.GET_LOJAS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        lojas: payload,
      };
    case MarketplaceActionTypes.GET_LOJAS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default marketplaceReducer;
