import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import HomeLojaColecao from "./HomeLojaColecao";
import WithSpinner from "../../components/withSpinner";
import { useDispatch } from "react-redux";
import { getColecaoStart } from "../../features/colecao/colecaoActions/colecaoActions";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";

type Props = {};

const Container = WithSpinner(HomeLojaColecao);

const HomeLojaColecaoContainer = (props: Props) => {
  const dispatch = useDispatch();

  const router = useRoute<RouteProp<MarketPlaceStackParamList>>();

  useEffect(() => {
    dispatch(getColecaoStart(router.params?.id!));
  }, []);

  return <Container isLoading={false} />;
};

export default HomeLojaColecaoContainer;

const styles = StyleSheet.create({});
