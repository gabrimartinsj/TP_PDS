import ScrollViewContainer from "../../components/ScrollViewContainer";
import Card, { CardType } from "../../components/atoms/Card";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../styles/theme";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";
import { Produto } from "../../@types/entities/Produto";
/*
type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  image: string;
  action?: () => void;
};
*/
type Colecao = {
  nome: string;
  produtos: Produto[];
};

export type Props = {
  colecaoo?: Colecao;
  produtos?: Produto[];
};

export default function HomeLojaColecao({ colecaoo, produtos }: Props) {
  const { colors } = useTheme() as CustomTheme;
  const navigation = useNavigation<NavigationProp<MarketPlaceStackParamList>>();
  console.log("PRODUTOS : ", produtos);

  /*
  let rows: Produto[][] = [];

  for (let i = 0; i < colecao.produtos.length; i++) {
    if (i % 2 == 0) rows.push([colecao.produtos[i]]);
    else rows[rows.length - 1].push(colecao.produtos[i]);
  }
  */
  return (
    <ScrollViewContainer>
      <Text
        style={{
          color: colors.primary,
          fontSize: 18,
          paddingLeft: 15,
          paddingBottom: 8,
          paddingTop: 10,
        }}
      >
        {"COLEÇÃO"}
      </Text>
      <View style={styles.mainContainer}>
        <FlatList
          data={produtos}
          numColumns={2}
          keyExtractor={(item) => item.ID_PRODUTO.toString()}
          renderItem={({ item }) => (
            <View>
              <Card
                card={{
                  img: item.URL_PRODUTO && item.URL_PRODUTO.trim(),
                  title: item.NOME_PRODUTO,
                  price: item.PRECO ? item.PRECO.toString() : "",
                  action: () =>
                    navigation.navigate("Produto", {
                      id: item.ID_PRODUTO,
                    }),
                }}
              />
            </View>
          )}
        />
        {/*
        produtos &&
          produtos.map((produto, idx) => {
            return (
              <View style={styles.row}>
                <Card
                  card={{
                    img: produto.URL_PRODUTO && produto.URL_PRODUTO.trim(),
                    title: produto.NOME_PRODUTO,
                    price: produto.PRECO ? produto.PRECO.toString() : "",
                    action: () =>
                      navigation.navigate("Produto", {
                        id: produto.ID_PRODUTO,
                      }),
                  }}
                />
              </View>
            );
          })
          */}
      </View>
    </ScrollViewContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
