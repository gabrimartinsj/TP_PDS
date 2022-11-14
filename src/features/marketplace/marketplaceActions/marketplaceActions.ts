import { Loja } from "../../../@types/entities/Loja";
import MarketplaceActionTypes from "./marketplaceActionTypes";

export const getLojasStart = () => ({
  type: MarketplaceActionTypes.GET_LOJAS_START,
});

export const getLojasSuccess = (lojas: Loja[]) => ({
  type: MarketplaceActionTypes.GET_LOJAS_SUCCESS,
  payload: lojas,
});

export const getLojasFailure = (error: string) => ({
  type: MarketplaceActionTypes.GET_LOJAS_FAILURE,
  payload: error,
});
