
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Compra } from "../@types/entities/Compra";

type Props = {
  compra: Compra
};

const Carrinho = (props: Props) => {
  return (
    <View>
      <Text>Carrinho</Text>
    </View>
  );
};

export default Carrinho;

const styles = StyleSheet.create({});
