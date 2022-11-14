import { all, call, spawn } from "redux-saga/effects";
import { colecaoSagas } from "../features/colecao/colecaoRedux/colecaoSagas";
import { lojaSagas } from "../features/loja/lojaRedux/lojaSagas";
import { marketplaceSagas } from "../features/marketplace/marketplaceRedux/marketplaceSagas";
import { produtoSagas } from "../features/produto/produtoRedux/produtoSagas";
import { userSagas } from "../features/user/userRedux/userSagas";

export default function* rootSaga() {
  yield all([
    call(lojaSagas),
    call(marketplaceSagas),
    call(produtoSagas),
    call(colecaoSagas),
    call(userSagas),
  ]);
}
