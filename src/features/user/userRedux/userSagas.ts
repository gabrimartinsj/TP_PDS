import { all, call, put, takeLatest } from "redux-saga/effects";
import { Compra } from "../../../@types/entities/Compra";
import { Loja } from "../../../@types/entities/Loja";
import { Api } from "../../../lib/api/api";
import { serverConfig } from "../../../lib/api/config";
import { HttpResponse } from "../../../lib/api/httpClient";
import {
  finalizarCompraFailure,
  finalizarCompraStart,
  finalizarCompraSuccess,
  getInformacaoPessoalFailure,
  getInformacaoPessoalStart,
  getInformacaoPessoalSuccess,
  recuperarComprasStart,
  recuperarComprasSuccess,
} from "../userActions/userActions";
import UserActionTypes from "../userActions/userActionTypes";

function* finalizarCompraAsync({
  payload,
}: ReturnType<typeof finalizarCompraStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url: serverConfig.pathUseCases.user.finalizarCompra.urlService as string,
      method: serverConfig.pathUseCases.user.finalizarCompra.method,
    })) as HttpResponse<boolean>;

    yield put(finalizarCompraSuccess(response.body!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(finalizarCompraFailure((error as Error).message));
  }
}

function* recuperarComprasAsync({
  payload,
}: ReturnType<typeof recuperarComprasStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url: serverConfig.pathUseCases.user.recuperarCompras.urlService as string,
      method: serverConfig.pathUseCases.user.recuperarCompras.method,
    })) as HttpResponse<Compra[]>;

    yield put(recuperarComprasSuccess(response.body!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(finalizarCompraFailure((error as Error).message));
  }
}

function* getInformacaoPessoalAsync({
  payload,
}: ReturnType<typeof getInformacaoPessoalStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url: serverConfig.pathUseCases.user.getInformacaoPessoal
        .urlService as string,
      method: serverConfig.pathUseCases.user.getInformacaoPessoal.method,
    })) as HttpResponse<any>;

    yield put(getInformacaoPessoalSuccess(response.body!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getInformacaoPessoalFailure((error as Error).message));
  }
}

export function* onFinalizarCompraStart() {
  yield takeLatest(
    UserActionTypes.FINALIZAR_COMPRA_START,
    finalizarCompraAsync
  );
}

export function* onGetInformacaoPessoalStart() {
  yield takeLatest(
    UserActionTypes.GET_INFORMACAO_PESSOAL_START,
    getInformacaoPessoalAsync
  );
}

export function* onRecuperarComprasStart() {
  yield takeLatest(
    UserActionTypes.RECUPERAR_COMPRAS_START,
    recuperarComprasAsync
  );
}

export function* userSagas() {
  yield all([
    call(onFinalizarCompraStart),
    call(onGetInformacaoPessoalStart),
    call(onRecuperarComprasStart),
  ]);
}
