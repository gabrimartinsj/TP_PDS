import { Dimensions, StyleSheet, View, Text } from "react-native";
import MImage from "../components/MImage";
import ScrollViewContainer from "../components/ScrollViewContainer";
import { CustomTheme } from "../styles/theme";
import { useTheme } from "react-native-paper";
import MProdutoInfo from "../components/MProductInfo";
import Card, { CardType } from "../components/atoms/Card";
import HorizontalList from "../components/compose/HorizontalList";
import MCustomButton from "../components/MCustomButton";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../navigation/marketplaceNavigation/MarketPlaceNavigation";

type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  image: string;
  action?: () => void;
};

type TelaProdutoData = {
  image: string;
  nome: string;
  preco: string;
  desconto: string;
  descricao: string;
  suggestions: Produto[];
};

export default function TelaProduto() {
  const { colors } = useTheme() as CustomTheme;
  const navigation = useNavigation<NavigationProp<MarketPlaceStackParamList>>();

  const produto = {
    image: "https://picsum.photos/600/800?random=7",
    nome: "Calvin Clein Regular fit slim fit shirt",
    preco: 40.25,
    desconto: 15,

    descricao:
      "Fabric: Cotton\nLength: Regular\nNeck: round Neck\nPattern: Graphic Print\n",
    suggestions: [
      {
        nome: "Allen Solly Regular fit cotton shirt",
        preco: 40.25,
        desconto: 15,
        image: "https://picsum.photos/200/330?random=1",
        action: () => navigation.navigate("Produto"),
      },
      {
        nome: "Calvin Clein Regular fit slim fit shirt",
        preco: 62.4,
        desconto: 20,
        image: "https://picsum.photos/200/330?random=2",
        action: () => navigation.navigate("Produto"),
      },
      {
        nome: "H&M Regular fit cotton shirt",
        preco: 70.8,
        desconto: 20,
        image: "https://picsum.photos/200/330?random=3",
        action: () => navigation.navigate("Produto"),
      },
      {
        nome: "Calvin Clein Regular fit casual shirt",
        preco: 75,
        desconto: 25,
        image: "https://picsum.photos/200/330?random=4",
        action: () => navigation.navigate("Produto"),
      },
      {
        nome: "Tommy Hilfiger slim fit semi formal shirt",
        preco: 71.3,
        desconto: 15,
        image: "https://picsum.photos/200/330?random=5",
        action: () => navigation.navigate("Produto"),
      },
      {
        nome: "Arrow slim fit semi formal shirt",
        preco: 53.9,
        desconto: 10,
        image: "https://picsum.photos/200/330?random=6",
        action: () => navigation.navigate("Produto"),
      },
    ],
  };

  return (
    <ScrollViewContainer style={styles.container}>
      <MImage image={produto.image} width={Dimensions.get("window").width} />
      <View style={styles.extraInfoContainer}>
        <MProdutoInfo
          name={produto.nome}
          price={produto.preco}
          desconto={produto.desconto}
        />
        <Text
          style={{
            color: colors.primary,
            fontSize: 15,
            padding: 10,
            paddingTop: 30,
          }}
        >
          Detalhes do produto
        </Text>
        <Text style={{ color: colors.primary, fontSize: 12, padding: 10 }}>
          {produto.descricao}
        </Text>
      </View>
      <HorizontalList
        title={"Você pode gostar"}
        data={
          produto.suggestions.map((produto) => ({
            img: produto.image,
            title: produto.nome,
            price:
              "R$" +
              produto.preco.toFixed(2) +
              " " +
              produto.desconto.toString() +
              "% OFF",
            action: produto.action,
          })) as CardType[]
        }
        renderItem={(item) => (
          <Card key={"ProdSuj." + item.index.toString()} card={item.item} />
        )}
      />
      <View style={styles.bottomButtons}>
        <MCustomButton
          style={styles.addToCartButton}
          textStyle={styles.addToCartButtonText}
          text={"Adicionar ao carrinho"}
          onPress={() => console.log("Adicionado ao carrinho")}
        />
        <MCustomButton
          style={styles.finalizarCompraButton}
          textStyle={styles.finalizarCompraButtonText}
          text={"Finalizar compra"}
          onPress={() => console.log("Compra finalizada")}
        />
      </View>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  extraInfoContainer: {
    margin: 20,
    borderBottomWidth: 2,
    borderColor: "lightgrey",
  },
  bottomButtons: {
    paddingTop: 10,
    paddingBottom: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    width: "80%",
    height: 50,
  },
  addToCartButtonText: {
    fontSize: 20,
    alignSelf: "center",
  },
  finalizarCompraButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
    justifyContent: "center",
    width: "80%",
    height: 50,
  },
  finalizarCompraButtonText: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
});
