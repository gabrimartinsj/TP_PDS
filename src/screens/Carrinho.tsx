import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Compra } from "../@types/entities/Compra";
import ScrollViewContainer from "../components/ScrollViewContainer";
import MProduto from "../components/MProduto";
import { ProdutoCarrinho } from "../components/MProduto";
import MDescValue from "../components/MDescValue";
import MCustomButton from "../components/MCustomButton";


type Props = {};

function calculateDiscount(price: number, discount: number): number {
  return price * (100 - Math.round(discount)) / 100;
}

function calculateDiscountReduction(price: number, discount: number): number {
  return price * Math.round(discount) / 100;
}

function toMoneyPattern(num: number): string {
  return "R$" + num.toFixed(2).replace(".", ",");
}

const Carrinho = (props: Props) => {

  const produtos: ProdutoCarrinho[] = [{
    imagem: "https://picsum.photos/200/300?random=",
    nome: "Calvin Clein Regular fit slim fit shirt",
    preco: 62.4,
    desconto: 20,
    quantidade: 1,
    onQuantityChange: onQuantityChange(0)
  },
  {
    imagem: "https://picsum.photos/210/300?random=",
    nome: "Bota legal",
    preco: 80,
    desconto: 10,
    quantidade: 2,
    onQuantityChange: onQuantityChange(1)
  },
  {
    imagem: "https://picsum.photos/220/300?random=",
    nome: "Boné Vermelho",
    preco: 30,
    desconto: 5,
    quantidade: 1,
    onQuantityChange: onQuantityChange(2)
  },
  {
    imagem: "https://picsum.photos/200/330?random=",
    nome: "Honda Civic",
    preco: 80000,
    desconto: 3,
    quantidade: 1,
    onQuantityChange: onQuantityChange(3)
  }];

  const [quantities, setQuantities] = useState(produtos.map((value) => value.quantidade));
  const [total, setTotal] = useState(calculateTotal());
  const [descontoTotal, setDescontoTotal] = useState(calculateTotalDiscount());
  const [totalComDesconto, setTotalComDesconto] = useState(calculateTotalWithDiscount()); 

  function onQuantityChange(idx: number) {
    return function(quantity: number) {
      quantities[idx] = quantity;
      setQuantities(quantities);
      setTotal(calculateTotal());
      setDescontoTotal(calculateTotalDiscount());
      setTotalComDesconto(calculateTotalWithDiscount());
    }
  }

  function calculateTotal(): number {
    let total = 0;
    for(let i = 0; i < produtos.length; i++)
      total += produtos[i].preco * quantities[i];
    return total;
  }

  function calculateTotalDiscount(): number {
    let total = 0;
    for(let i = 0; i < produtos.length; i++)
      total += calculateDiscountReduction(produtos[i].preco * quantities[i], produtos[i].desconto);
    return total;
  }

  function calculateTotalWithDiscount(): number {
    return calculateTotal() - calculateTotalDiscount();
  }

  function calculateFrete(): number {
    return 0;
  }

  function calculateServices(): number {
    return 0;
  }


  return (
    <ScrollViewContainer>
      <View>
        {produtos.map((produto, idx) => {
          return (
            <MProduto produto={produto} key={idx}/>
          )
        })}
      </View>
      <View style={styles.bottom}>
        <MDescValue description={"Total dos Produtos:"} value={toMoneyPattern(total)} fontSize={16} color={"gray"}></MDescValue>
        <MDescValue description={"Frete:"} value={toMoneyPattern(calculateFrete())} fontSize={16} color={"gray"}></MDescValue>
        <MDescValue description={"Serviços:"} value={toMoneyPattern(calculateServices())} fontSize={16} color={"gray"}></MDescValue>
        <MDescValue description={"Descontos:"} value={"-" + toMoneyPattern(descontoTotal)} fontSize={16} color={"gray"}></MDescValue>
        <MDescValue description={"Valor Total:"} value={toMoneyPattern(totalComDesconto)} fontSize={20} color={"black"}></MDescValue>
        <MCustomButton text={"Finalizar compra"} style={styles.finalizarCompraButton} textStyle={styles.finalizarCompraButtonText} onPress={() => console.log("Compra Finalizada")}/>
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
    paddingBottom: 50
  },
  finalizarCompraButton: {
    backgroundColor: "black",
    borderRadius: 8,
    height: 40,
    margin: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  finalizarCompraButtonText: {
    color: "white",
    fontSize: 20
  }
});
