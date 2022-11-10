import { all, call, put, takeLatest } from "redux-saga/effects";
import { Loja } from "../../../@types/entities/Loja";
import { Api } from "../../../lib/api/api";
import { serverConfig } from "../../../lib/api/config";
import { HttpResponse } from "../../../lib/api/httpClient";
import {
  getLojaFailure,
  getLojaStart,
  getLojaSuccess,
} from "../lojaActions/lojaActions";
import LojaActionTypes from "../lojaActions/lojaActionTypes";

function* getLojaAsync({ payload }: ReturnType<typeof getLojaStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url:
        serverConfig.pathUseCases.loja.getLojaStart.urlService + `/${payload}`,
      method: serverConfig.pathUseCases.loja.getLojaStart.method,
    })) as HttpResponse<Loja>;

    yield put(getLojaSuccess(response.body!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getLojaFailure((error as Error).message));
  }
}

export function* onGetLojaStart() {
  yield takeLatest(LojaActionTypes.GET_LOJA_START, getLojaAsync);
}

export function* lojaSagas() {
  yield all([call(onGetLojaStart)]);
}
