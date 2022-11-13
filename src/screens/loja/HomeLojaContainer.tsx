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

type Props = {};

const Container = WithSpinner(HomeLoja);
const HomeLojaContainer = (props: Props) => {
  const dispatch = useDispatch();

  const route = useRoute<RouteProp<MarketPlaceStackParamList>>();

  useEffect(() => {
    dispatch(getLojaStart(route.params?.id!));
  }, []);

  const { isFetching, loja } = useSelector((state: RootState) => state.loja);

  return <Container isLoading={isFetching} loja={loja} />;
};

export default HomeLojaContainer;

const styles = StyleSheet.create({});
