import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLojasStart } from "../../features/marketplace/marketplaceActions/marketplaceActions";
import { RootState } from "../../redux/root-reducer";
import WithSpinner from "../../components/withSpinner";
import Home from "./Home";
import { getProdutosStart } from "../../features/produto/produtoActions/produtoActions";

type Props = {};

const Container = WithSpinner(Home);
const HomeContainer = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("PASSOU AQ ????");
    //dispatch(getLojasStart());
    dispatch(getProdutosStart());
  }, []);
  const { isFetching, lojas } = useSelector(
    (state: RootState) => state.marketplace
  );

  const { produtos } = useSelector((state: RootState) => state.produto);

  return lojas ? (
    <Container isLoading={isFetching} lojas={lojas} produtos={produtos} />
  ) : null;
};

export default HomeContainer;

const styles = StyleSheet.create({});
