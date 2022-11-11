import { all, call, put, takeLatest } from "redux-saga/effects";
import { Colecao } from "../../../@types/entities/Colecao";
import { Loja } from "../../../@types/entities/Loja";
import { Produto } from "../../../@types/entities/Produto";
import { Api } from "../../../lib/api/api";
import { serverConfig } from "../../../lib/api/config";
import { HttpResponse } from "../../../lib/api/httpClient";
import {
  getColecaoFailure,
  getColecaoStart,
  getColecaoSuccess,
} from "../colecaoActions/colecaoActions";
import ColecaoActionTypes from "../colecaoActions/colecaoActionTypes";

function* getColecaoAsync({ payload }: ReturnType<typeof getColecaoStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url:
        serverConfig.pathUseCases.colecao.getColecaoStart.urlService +
        `/${payload}`,
      method: serverConfig.pathUseCases.colecao.getColecaoStart.method,
    })) as HttpResponse<Colecao>;

    yield put(getColecaoSuccess(response.body!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getColecaoFailure((error as Error).message));
  }
}

export function* onGetColecaoStart() {
  yield takeLatest(ColecaoActionTypes.GET_COLECAO_START, getColecaoAsync);
}

export function* colecaoSagas() {
  yield all([call(onGetColecaoStart)]);
}
