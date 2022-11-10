import { all, call, spawn } from "redux-saga/effects";
import { lojaSagas } from "../features/loja/lojaRedux/lojaSagas";
import { marketplaceSagas } from "../features/marketplace/marketplaceRedux/marketplaceSagas";

export default function* rootSaga() {
  yield all([
    //call(offlineSagas),
    call(lojaSagas),
    call(marketplaceSagas),
  ]);
}
