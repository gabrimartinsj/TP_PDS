import { all, call, put, takeLatest } from "redux-saga/effects";
import { Loja } from "../../../@types/entities/Loja";
import { Api } from "../../../lib/api/api";
import { serverConfig } from "../../../lib/api/config";
import { BodyWrapper, HttpResponse } from "../../../lib/api/httpClient";
import {
  getLojasFailure,
  getLojasSuccess,
} from "../marketplaceActions/marketplaceActions";
import MarketplaceActionTypes from "../marketplaceActions/marketplaceActionTypes";

function* getLojasAsync() {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url: serverConfig.pathUseCases.marketplace.getLojasStart
        .urlService as string,
      method: serverConfig.pathUseCases.marketplace.getLojasStart.method,
    })) as HttpResponse<BodyWrapper<Loja[]>>;
    console.log("LOJAS : ", response.body);
    yield put(getLojasSuccess(response.body!.data));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getLojasFailure((error as Error).message));
  }
}

export function* onGetLojasStart() {
  yield takeLatest(MarketplaceActionTypes.GET_LOJAS_START, getLojasAsync);
}

export function* marketplaceSagas() {
  yield all([call(onGetLojasStart)]);
}
