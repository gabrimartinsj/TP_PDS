import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TelaProduto from "./TelaProduto";
import WithSpinner from "../../components/withSpinner";
import { useDispatch, useSelector } from "react-redux";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";
import {
  getProdutoFailure,
  getProdutoStart,
  getProdutoSuccess,
} from "../../features/produto/produtoActions/produtoActions";
import { RootState } from "../../redux/root-reducer";
import { Api } from "../../lib/api/api";
import { serverConfig } from "../../lib/api/config";
import { BodyWrapper, HttpResponse } from "../../lib/api/httpClient";
import { Produto } from "../../@types/entities/Produto";
type Props = {};

const Container = WithSpinner(TelaProduto);

const ProdutoContainer = (props: Props) => {
  const [product, setProduto] = useState<Produto[] | null>();
  const router = useRoute<RouteProp<MarketPlaceStackParamList>>();
  const dispatch = useDispatch();
  const { produto, isFetching } = useSelector(
    (state: RootState) => state.produto
  );
  /*
  useEffect(() => {
    dispatch(getProdutoStart(router.params?.id!));
  }, []);
  */
  /*
  useEffect(() => {
    (async () => {
      try {
        const api = new Api();
        const response = (await api.Fetch({
          url:
            serverConfig.pathUseCases.produto.getProduto.urlService +
            `/${router.params?.id!}`,
          method: serverConfig.pathUseCases.produto.getProduto.method,
        })) as HttpResponse<BodyWrapper<Produto[]>>;

        //await put(getProdutoSuccess(response.body?.data!));
        // yield put(putMessage("Login realizado com sucesso", "success"));
        dispatch(getProdutoSuccess(response.body?.data[0]!));
        setProduto(response.body?.data);
      } catch (error) {
        console.log((error as Error).message);
        await dispatch(getProdutoFailure((error as Error).message));
      }
    })();
  }, []);
  */

  return <Container isLoading={isFetching} produto={produto[0] as Produto} />;
};

export default ProdutoContainer;

const styles = StyleSheet.create({});
