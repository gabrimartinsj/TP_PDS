import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLojasStart } from "../../features/marketplace/marketplaceActions/marketplaceActions";
import { RootState } from "../../redux/root-reducer";
import WithSpinner from "../../components/withSpinner";
import Home from "./Home";

type Props = {};

const Container = WithSpinner(Home);
const HomeContainer = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLojasStart());
  }, []);

  const { isFetching, lojas } = useSelector(
    (state: RootState) => state.marketplace
  );

  return <Container isLoading={isFetching} lojas={lojas} />;
};

export default HomeContainer;

const styles = StyleSheet.create({});
