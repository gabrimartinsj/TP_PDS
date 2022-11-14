import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

// <-- Navigators -->
import MainNavigation from "./mainNavigation/MainNavigation";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import {
  getLojasFailure,
  getLojasStart,
  getLojasSuccess,
} from "../features/marketplace/marketplaceActions/marketplaceActions";
import { getProdutosStart } from "../features/produto/produtoActions/produtoActions";
import { Api } from "../lib/api/api";
import { serverConfig } from "../lib/api/config";
import { BodyWrapper, HttpResponse } from "../lib/api/httpClient";
import { Loja } from "../@types/entities/Loja";
import { put } from "redux-saga/effects";

type Props = {
  isUserAuthenticated?: boolean;
};

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
};

const AppNavigation = ({ isUserAuthenticated }: Props) => {
  const dispatch = useDispatch();
  const [lojas, setLojas] = useState<Loja[]>();
  useEffect(() => {
    (async () => {
      try {
        const api = new Api();
        const response = (await api.Fetch({
          url: serverConfig.pathUseCases.marketplace.getLojasStart
            .urlService as string,
          method: serverConfig.pathUseCases.marketplace.getLojasStart.method,
        })) as HttpResponse<BodyWrapper<Loja[]>>;
        console.log("LOJAS : ", response.body);
        dispatch(getLojasSuccess(response.body!.data));
        // yield put(putMessage("Login realizado com sucesso", "success"));
        setLojas(response.body!.data);
      } catch (error) {
        console.log((error as Error).message);
        dispatch(getLojasFailure((error as Error).message));
      }
    })();
  }, []);
  return (
    <NavigationContainer>
      {lojas ? <MainNavigation /> : null}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  // isUserAuthenticated: state.auth.isUserAuthenticated,
});

export default connect(mapStateToProps)(AppNavigation);
