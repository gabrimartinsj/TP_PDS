import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "./store";

import userReducer from "../features/user/userRedux/userReducer";
import marketplaceReducer from "../features/marketplace/marketplaceRedux/marketplaceReducer";
import carrinhoReducer from "../features/carrinho/carrinhoRedux/carrinhoRedux";
import lojaReducer from "../features/loja/lojaRedux/lojaReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
  marketplace: marketplaceReducer,
  carrinho: carrinhoReducer,
  loja: lojaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistedReducer = persistReducer<RootState>(
  persistConfig,
  rootReducer
);
