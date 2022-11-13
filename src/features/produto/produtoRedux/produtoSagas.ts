import { all, call, put, takeLatest } from "redux-saga/effects";
import { Loja } from "../../../@types/entities/Loja";
import { Produto } from "../../../@types/entities/Produto";
import { Api } from "../../../lib/api/api";
import { serverConfig } from "../../../lib/api/config";
import { HttpResponse } from "../../../lib/api/httpClient";
import {
  getProdutoFailure,
  getProdutoStart,
  getProdutoSuccess,
} from "../produtoActions/produtoActions";
import ProdutoActionTypes from "../produtoActions/produtoActionTypes";

function* getProdutoAsync({ payload }: ReturnType<typeof getProdutoStart>) {
  try {
    const api = new Api();
    const response = (yield api.Fetch({
      url:
        serverConfig.pathUseCases.produto.getProdutoStart.urlService +
        `/${payload}`,
      method: serverConfig.pathUseCases.produto.getProdutoStart.method,
    })) as HttpResponse<Produto>;

    yield put(getProdutoSuccess(response.body!));
    // yield put(putMessage("Login realizado com sucesso", "success"));
  } catch (error) {
    console.log((error as Error).message);
    yield put(getProdutoFailure((error as Error).message));
  }
}

export function* onGetProdutoStart() {
  yield takeLatest(ProdutoActionTypes.GET_PRODUTO_START, getProdutoAsync);
}

export function* produtoSagas() {
  yield all([call(onGetProdutoStart)]);
}
