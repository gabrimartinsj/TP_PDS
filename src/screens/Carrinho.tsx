import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Compra } from "../@types/entities/Compra";
import ScreenContainer from "../components/ScreenContainer";
import MProduto from "../components/MProduto";
import { ProdutoCarrinho } from "../components/MProduto";


type Props = {};

const Carrinho = (props: Props) => {

  const produtos: ProdutoCarrinho[] = [{
    imagem: "https://image-placeholder.com/images/actual-size/75x75.png",
    nome: "Calvin Clein Regular fit slim fit shirt",
    preco: 52,
    desconto: 20,
    quantidade: 1,
    idx: 0
  }];

  return (
    <ScreenContainer>
      <Text>Carrinho</Text>
      {produtos.map((produto, idx) => {
        return (
          <MProduto produto={produto} key={idx}/>
        )
      })}
    </ScreenContainer>
  );
};

export default Carrinho;

const styles = StyleSheet.create({});
