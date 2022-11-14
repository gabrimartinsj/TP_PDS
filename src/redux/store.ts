import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { persistedReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-sagas";
//import rootSaga from "./root-saga";

//const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];
//const middlewares: any = []

if (__DEV__) {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
  //enhancers: [reactotron.createEnhancer()],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
