import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Compra } from "../@types/entities/Compra";
import ScreenContainer from "../components/ScreenContainer";

type Props = {
  compra: Compra;
};

const Carrinho = (props: Props) => {
  return (
    <ScreenContainer>
      <Text>Carrinho</Text>
    </ScreenContainer>
  );
};

export default Carrinho;

const styles = StyleSheet.create({});
