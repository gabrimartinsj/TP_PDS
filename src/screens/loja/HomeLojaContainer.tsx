import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLojasStart } from "../../features/marketplace/marketplaceActions/marketplaceActions";
import { RootState } from "../../redux/root-reducer";
import WithSpinner from "../../components/withSpinner";
import HomeLoja from "./HomeLoja";
import { getLojaStart } from "../../features/loja/lojaActions/lojaActions";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";
import { getColecaoDeLojaStart } from "../../features/colecao/colecaoActions/colecaoActions";

type Props = {};

const Container = WithSpinner(HomeLoja);
const HomeLojaContainer = (props: Props) => {
  const dispatch = useDispatch();

  const route = useRoute<RouteProp<MarketPlaceStackParamList>>();
  const { isFetching, loja } = useSelector((state: RootState) => state.loja);

  const { produtos } = useSelector((state: RootState) => state.produto);

  const { colecoes } = useSelector((state: RootState) => state.colecao);
  useEffect(() => {
    //dispatch(getLojaStart(route.params?.id!));
    dispatch(getColecaoDeLojaStart(route.params?.id!));
  }, []);

  return (
    <Container
      isLoading={isFetching}
      loja={loja}
      produtos={produtos}
      colecoes={colecoes}
    />
  );
};

export default HomeLojaContainer;

const styles = StyleSheet.create({});
