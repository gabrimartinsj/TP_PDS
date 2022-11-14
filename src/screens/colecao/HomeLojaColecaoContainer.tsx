import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import HomeLojaColecao from "./HomeLojaColecao";
import WithSpinner from "../../components/withSpinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getColecaoStart,
  getProdutosDeColecaoStart,
} from "../../features/colecao/colecaoActions/colecaoActions";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";
import { RootState } from "../../redux/root-reducer";

type Props = {};

const Container = WithSpinner(HomeLojaColecao);

const HomeLojaColecaoContainer = (props: Props) => {
  const dispatch = useDispatch();

  const router = useRoute<RouteProp<MarketPlaceStackParamList>>();
  const { colecao, isFetching, produtos } = useSelector(
    (state: RootState) => state.colecao
  );
  useEffect(() => {
    // dispatch(getColecaoStart(router.params?.id!));
    dispatch(getProdutosDeColecaoStart(router.params?.id!));
  }, []);

  return (
    <Container isLoading={isFetching} colecaoo={colecao} produtos={produtos} />
  );
};

export default HomeLojaColecaoContainer;

const styles = StyleSheet.create({});
