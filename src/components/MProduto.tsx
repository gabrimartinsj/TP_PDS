
import { View, StyleSheet, Image, Text } from "react-native";

export type ProdutoCarrinho = {
  imagem: string,
  nome: string,
  preco: number,
  desconto: number,
  quantidade: number,
  idx: number
};

type MProdutoProps = {
  produto: ProdutoCarrinho
};

export default function MProduto(props: MProdutoProps) {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://image-placeholder.com/images/actual-size/75x75.png"}} style={styles.image}></Image>
      <View style={styles.imageInfoText}>
        <Text>Teste</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20
  },
  image: {
    height: 200,
    width: "auto",
    resizeMode: "contain"
  },
  imageInfoText: {
    flex: 1
  }
});
