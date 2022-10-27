
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CustomTheme } from "../styles/theme";
import { useTheme } from "react-native-paper";
import MImage from "./MImage";
import MCustomButton from "./MCustomButton";


export type ProdutoCarrinho = {
  imagem: string,
  nome: string,
  preco: number,
  desconto: number,
  quantidade: number,
  onQuantityChange: Function
};

type ImageDimensions = {
  width: number,
  height: number
}

type MProdutoProps = {
  produto: ProdutoCarrinho
};


function calculateDiscount(price: number, discount: number): number {
  return price * (100 - Math.round(discount)) / 100;
}

function toMoneyPattern(num: number): string {
  return "R$" + num.toFixed(2).replace(".", ",");
}


export default function MProduto(props: MProdutoProps) {

  const { colors } = useTheme() as CustomTheme;

  const [productQuantity, setProductQuantity] = useState(props.produto.quantidade); // Tem Que fazer algo aqui quando alterar a quantidade

  function incrementProductQuantity() {
    props.produto.onQuantityChange(productQuantity + 1);
    setProductQuantity(productQuantity + 1);
  }

  function decrementProductQuantity() {
    if(productQuantity == 0)
      return;
    props.produto.onQuantityChange(productQuantity - 1);
    setProductQuantity(productQuantity - 1);
  }

  return (
    <View style={styles.container}>
      <MImage image={props.produto.imagem} width={120} style={{borderRadius: 6}}></MImage>
      <View style={styles.imageInfoText}>
        <Text style={{color: colors.text, fontSize: 16}}>{props.produto.nome}</Text>
        <View style={{flexDirection: "row", alignItems: "flex-end", paddingTop: 10}}>
          <Text style={{color: colors.primary, fontSize: 16, fontWeight: "bold"}}> {toMoneyPattern(calculateDiscount(props.produto.preco, props.produto.desconto))} </Text>
          <Text style={{color: colors.disabled, fontSize: 12, textDecorationLine: "line-through"}}> {toMoneyPattern(props.produto.preco)}</Text>
          <Text style={{color: "orange", fontSize: 12}}> {Math.round(props.produto.desconto)}% OFF</Text>
        </View>
        <View style={styles.quantityView}>
          <View style={styles.occupySpace}></View>
          <View style={styles.buttonsContainer}>
            <MCustomButton
              text={"+"}
              style={[styles.changeQuantityButton, styles.incrementButton]}
              textStyle={[styles.changeQuantityButtonsText, styles.incrementButtonText]}
              onPress={incrementProductQuantity}/>

            <View style={styles.quantityContainer}>
              <Text style={{fontSize: 16}}>{productQuantity}</Text>
            </View>

            <MCustomButton
              text={"-"} 
              style={[styles.changeQuantityButton, styles.decrementButton]}
              textStyle={styles.changeQuantityButtonsText}
              disabledStyle={[styles.changeQuantityButton, styles.disabledButton]}
              textDisabledStyle={[styles.changeQuantityButtonsText, styles.disabledText]}
              disabled={productQuantity == 0}
              onPress={decrementProductQuantity}/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20
  },
  imageInfoText: {
    paddingLeft: 8,
    flex: 1,
  },
  occupySpace: {
    flex: 1,
  },
  quantityView: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  changeQuantityButton: {
    width: 34,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontWeight: "bold"
  },
  changeQuantityButtonsText: {
    fontWeight: "bold"
  },
  incrementButton: {
    backgroundColor: "black"
  },
  incrementButtonText: {
    color: "white"
  },
  decrementButton: {
    borderWidth: 2,
    borderColor: "black"
  },
  disabledButton: {
    borderWidth: 2,
    borderColor: "gray"
  },
  disabledText: {
    color: "gray"
  },
  quantityContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: 20
  }
});

