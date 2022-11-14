import { all, call, put, takeLatest } from "redux-saga/effects";
import { Loja } from "../../../@types/entities/Loja";
import { Produto } from "../../../@types/entities/Produto";
import { Api } from "../../../lib/api/api";
import { serverConfig } from "../../../lib/api/config";
import { BodyWrapper, HttpResponse } from "../../../lib/api/httpClient";
import {
  getProdutoFailure,
  getProdutosFailure,
  getProdutosSuccess,
  getProdutoStart,
  getProdutoSuccess,
} from "../produtoActions/produtoActions";
import ProdutoActionTypes from "../produtoActions/produtoActionTypes";

function* getProdutoAsync({ payload }: ReturnType<typeof getProdutoStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url:
        serverConfig.pathUseCases.produto.getProduto.urlService + `/${payload}`,
      method: serverConfig.pathUseCases.produto.getProduto.method,
    })) as HttpResponse<BodyWrapper<Produto[]>>;

    yield put(getProdutoSuccess(response.body?.data![0]!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getProdutoFailure((error as Error).message));
  }
}

function* getProdutosAsync() {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url: serverConfig.pathUseCases.produto.getProdutos.urlService as string,
      method: serverConfig.pathUseCases.produto.getProdutos.method,
    })) as HttpResponse<BodyWrapper<Produto[]>>;
    console.log("RESPONSE GET PRODUTOS : ", response.body?.data!);
    yield put(getProdutosSuccess(response.body?.data!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getProdutosFailure((error as Error).message));
  }
}

export function* onGetProdutoStart() {
  yield takeLatest(ProdutoActionTypes.GET_PRODUTO_START, getProdutoAsync);
}

export function* onGetProdutosStart() {
  yield takeLatest(ProdutoActionTypes.GET_PRODUTOS_START, getProdutosAsync);
}

export function* produtoSagas() {
  yield all([call(onGetProdutoStart), call(onGetProdutosStart)]);
}
