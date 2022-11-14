import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Compra } from "../../@types/entities/Compra";
import ScrollViewContainer from "../../components/ScrollViewContainer";
import MProduto from "../../components/MProduto";
import MDescValue from "../../components/MDescValue";
import MCustomButton from "../../components/MCustomButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import {
  addItem,
  limparCarrinho,
  removeItem,
} from "../../features/carrinho/carrinhoActions/carrinhoActions";

type Props = {};
/*
function toMoneyPattern(num: number): string {
  return "R$" + num.toFixed(2).replace(".", ",");
}
*/
const Carrinho = (props: Props) => {
  const { carrinho } = useSelector((state: RootState) => state.carrinho);

  const dispatch = useDispatch();
  console.log("CARRINHO : ", carrinho.itens);
  /* 

  MODELO PARA DISPARAR AÇÕES PRO GERENCIADOR DE ESTADOS
    
    dispatch(addItem(item));

    dispatch(removeItem(item.id))
    
    
    */

  /*

  MODELO PARA RECUPERAR ATRIBUTOS DO GERENCIADOR DE ESTADOS

    //AQUI ESTOU RECUPERANDO A VARIAVEL CARRINHO DIRETO DO GERENCIADOR -> gerenciador.carrinho
      const { carrinho } = useSelector((state: RootState) => state.carrinho);

  */
  /*
  useEffect(() => {
    if (carrinho.itens.length != 0) return;

    const items = [
      {
        image: "https://picsum.photos/200/300?random=",
        nome: "Calvin Clein Regular fit slim fit shirt",
        preco: 62.4,
        desconto: 20,
        quantidade: 1,
      },
      {
        image: "https://picsum.photos/210/300?random=",
        nome: "Bota legal",
        preco: 80,
        desconto: 10,
        quantidade: 2,
      },
      {
        image: "https://picsum.photos/220/300?random=",
        nome: "Boné Vermelho",
        preco: 30,
        desconto: 5,
        quantidade: 1,
      },
      {
        image: "https://picsum.photos/200/330?random=",
        nome: "Honda Civic",
        preco: 80000,
        desconto: 3,
        quantidade: 1,
      },
    ];

    for (let i = 0; i < items.length; i++) {
      dispatch(
        addItem({
          id: i,
          ...items[i],
        })
      );
    }
  }, []);
  */
  function onIncrement(idx: number) {
    return function () {
      dispatch(addItem(carrinho.itens[idx]));
    };
  }

  function onDecrement(idx: number) {
    return function () {
      dispatch(removeItem(carrinho.itens[idx].id));
    };
  }

  const finalizarCompra = () => {
    Alert.alert(
      "Recebemos sua compra",
      "Vamos entrar em contato para mais informações",
      [{ text: "OK", onPress: () => dispatch(limparCarrinho()) }]
    );
  };

  return (
    <ScrollViewContainer>
      <View>
        {carrinho &&
          carrinho.itens.map((produto, idx) => {
            return (
              <MProduto
                produto={{
                  imagem: produto.image,
                  nome: produto.nome,
                  preco: produto.preco,
                  desconto: produto.desconto,
                  quantidade: produto.quantidade,
                  onIncrement: onIncrement(idx),
                  onDecrement: onDecrement(idx),
                }}
                key={idx}
              />
            );
          })}
      </View>
      <View style={styles.bottom}>
        {
          <>
            <MDescValue
              description={"Total dos Produtos:"}
              value={carrinho.totalBruto.toString()}
              fontSize={16}
              color={"gray"}
            ></MDescValue>
            <MDescValue
              description={"Frete:"}
              value={carrinho.frete.toString()}
              fontSize={16}
              color={"gray"}
            ></MDescValue>
            <MDescValue
              description={"Serviços:"}
              value={carrinho.servicos.toString()}
              fontSize={16}
              color={"gray"}
            ></MDescValue>
            <MDescValue
              description={"Descontos:"}
              value={"-" + carrinho.desconto.toString()}
              fontSize={16}
              color={"gray"}
            ></MDescValue>
            <MDescValue
              description={"Valor Total:"}
              value={carrinho.total.toString()}
              fontSize={20}
              color={"black"}
            ></MDescValue>
          </>
        }

        <MCustomButton
          text={"Finalizar compra"}
          style={styles.finalizarCompraButton}
          textStyle={styles.finalizarCompraButtonText}
          onPress={() => finalizarCompra()}
        />
      </View>
    </ScrollViewContainer>
  );
};

export default Carrinho;

const styles = StyleSheet.create({
  bottom: {
    borderTopWidth: 2,
    borderTopColor: "gray",
    marginTop: 80,
    paddingBottom: 50,
  },
  finalizarCompraButton: {
    backgroundColor: "black",
    borderRadius: 8,
    height: 40,
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  finalizarCompraButtonText: {
    color: "white",
    fontSize: 20,
  },
});
