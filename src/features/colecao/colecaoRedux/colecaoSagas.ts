import { all, call, put, takeLatest } from "redux-saga/effects";
import { Colecao } from "../../../@types/entities/Colecao";
import { Loja } from "../../../@types/entities/Loja";
import { Produto } from "../../../@types/entities/Produto";
import { Api } from "../../../lib/api/api";
import { serverConfig } from "../../../lib/api/config";
import { BodyWrapper, HttpResponse } from "../../../lib/api/httpClient";
import {
  getColecaoDeLojaFailure,
  getColecaoDeLojaStart,
  getColecaoDeLojaSuccess,
  getColecaoFailure,
  getColecaoStart,
  getColecaoSuccess,
  getProdutosDeColecaoFailure,
  getProdutosDeColecaoStart,
  getProdutosDeColecaoSuccess,
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

function* getColecaoDeLojaAsync({
  payload,
}: ReturnType<typeof getColecaoDeLojaStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url:
        serverConfig.pathUseCases.colecao.getColecaoDeLojaStart.urlService +
        `/${payload}`,
      method: serverConfig.pathUseCases.colecao.getColecaoDeLojaStart.method,
    })) as HttpResponse<BodyWrapper<Colecao[]>>;
    console.log("COLECAO DE LOJA : ", response);
    yield put(getColecaoDeLojaSuccess(response.body?.data!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getColecaoDeLojaFailure((error as Error).message));
  }
}

function* getProdutosDeColecaoAsync({
  payload,
}: ReturnType<typeof getProdutosDeColecaoStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url:
        serverConfig.pathUseCases.colecao.getProdutosDeColecao.urlService +
        `/${payload}`,
      method: serverConfig.pathUseCases.colecao.getProdutosDeColecao.method,
    })) as HttpResponse<BodyWrapper<Produto[]>>;
    console.log("RESP AQ : ", response.body);
    yield put(getProdutosDeColecaoSuccess(response.body?.data!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getProdutosDeColecaoFailure((error as Error).message));
  }
}

export function* onGetColecaoStart() {
  yield takeLatest(ColecaoActionTypes.GET_COLECAO_START, getColecaoAsync);
}

export function* onGetColecaoDeLojaStart() {
  yield takeLatest(
    ColecaoActionTypes.GET_COLECAO_DE_LOJA_START,
    getColecaoDeLojaAsync
  );
}

export function* onGetProdutosDeColecaoStart() {
  yield takeLatest(
    ColecaoActionTypes.GET_PRODUTOS_DE_COLECAO_START,
    getProdutosDeColecaoAsync
  );
}

export function* colecaoSagas() {
  yield all([
    call(onGetColecaoStart),
    call(onGetColecaoDeLojaStart),
    call(onGetProdutosDeColecaoStart),
  ]);
}
