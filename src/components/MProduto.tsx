import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CustomTheme } from "../styles/theme";
import { useTheme } from "react-native-paper";
import MImage from "./MImage";
import MCustomButton from "./MCustomButton";
import MProdutoInfo from "./MProductInfo";

type ProdutoView = {
  imagem: string;
  nome: string;
  preco: number;
  desconto: number;
  quantidade: number;
  onIncrement: Function;
  onDecrement: Function;
};

type MProdutoProps = {
  produto: ProdutoView;
};

export default function MProduto(props: MProdutoProps) {
  const { colors } = useTheme() as CustomTheme;
  console.log("PROPS : ", props);
  const [productQuantity, setProductQuantity] = useState(
    props.produto.quantidade
  );

  function incrementProductQuantity() {
    props.produto.onIncrement();
    setProductQuantity(productQuantity + 1);
  }

  function decrementProductQuantity() {
    if (productQuantity == 0) return;
    props.produto.onDecrement();
    setProductQuantity(productQuantity - 1);
  }

  return (
    <View style={styles.container}>
      <MImage
        image={props.produto.imagem}
        width={120}
        style={{ borderRadius: 6 }}
      ></MImage>
      <View style={styles.imageInfoText}>
        <MProdutoInfo
          name={props.produto.nome}
          price={props.produto.preco}
          desconto={props.produto.desconto}
        />
        <View style={styles.quantityView}>
          <View style={styles.occupySpace}></View>
          <View style={styles.buttonsContainer}>
            <MCustomButton
              text={"+"}
              style={[styles.changeQuantityButton, styles.incrementButton]}
              textStyle={[
                styles.changeQuantityButtonsText,
                styles.incrementButtonText,
              ]}
              onPress={incrementProductQuantity}
            />

            <View style={styles.quantityContainer}>
              <Text style={{ fontSize: 16 }}>{productQuantity}</Text>
            </View>

            <MCustomButton
              text={"-"}
              style={[styles.changeQuantityButton, styles.decrementButton]}
              textStyle={styles.changeQuantityButtonsText}
              disabledStyle={[
                styles.changeQuantityButton,
                styles.disabledButton,
              ]}
              textDisabledStyle={[
                styles.changeQuantityButtonsText,
                styles.disabledText,
              ]}
              disabled={productQuantity == 0}
              onPress={decrementProductQuantity}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  imageInfoText: {
    paddingLeft: 8,
    flex: 1,
  },
  occupySpace: {
    flex: 1,
  },
  quantityView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  changeQuantityButton: {
    width: 34,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontWeight: "bold",
  },
  changeQuantityButtonsText: {
    fontWeight: "bold",
  },
  incrementButton: {
    backgroundColor: "black",
  },
  incrementButtonText: {
    color: "white",
  },
  decrementButton: {
    borderWidth: 2,
    borderColor: "black",
  },
  disabledButton: {
    borderWidth: 2,
    borderColor: "gray",
  },
  disabledText: {
    color: "gray",
  },
  quantityContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: 20,
  },
});
