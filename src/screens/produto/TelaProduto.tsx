import { Dimensions, StyleSheet, View, Text, Image, Alert } from "react-native";
import MImage from "../../components/MImage";
import ScrollViewContainer from "../../components/ScrollViewContainer";
import { CustomTheme } from "../../styles/theme";
import { useTheme } from "react-native-paper";
import MProdutoInfo from "../../components/MProductInfo";
import Card, { CardType } from "../../components/atoms/Card";
import HorizontalList from "../../components/compose/HorizontalList";
import MCustomButton from "../../components/MCustomButton";
import {
  useNavigation,
  NavigationProp,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";
import { Produto } from "../../@types/entities/Produto";
import { useEffect, useState } from "react";
import { Api } from "../../lib/api/api";
import { serverConfig } from "../../lib/api/config";
import { BodyWrapper, HttpResponse } from "../../lib/api/httpClient";
import { put } from "redux-saga/effects";
import {
  getProdutoFailure,
  getProdutoSuccess,
} from "../../features/produto/produtoActions/produtoActions";
import { useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import { addItem } from "../../features/carrinho/carrinhoActions/carrinhoActions";
/*
type Produto = {
  nome: string;
  preco: number;
  desconto: number;
  image: string;
  action?: () => void;
};
*/

type TelaProdutoData = {
  image: string;
  nome: string;
  preco: string;
  desconto: string;
  descricao: string;
  suggestions: Produto[];
};

type Props = {
  produto?: Produto;
};

export default function TelaProduto({ produto }: Props) {
  const { colors } = useTheme() as CustomTheme;
  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProp<MarketPlaceStackParamList>>();
  const [product, setProduct] = useState<Produto[]>();
  const [loading, setLoading] = useState(true);
  const router = useRoute<RouteProp<MarketPlaceStackParamList>>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const api = new Api();
        const response = (await api.Fetch({
          url:
            serverConfig.pathUseCases.produto.getProduto.urlService +
            `/${router.params?.id!}`,
          method: serverConfig.pathUseCases.produto.getProduto.method,
        })) as HttpResponse<BodyWrapper<Produto[]>>;

        //await put(getProdutoSuccess(response.body?.data!));
        // yield put(putMessage("Login realizado com sucesso", "success"));
        dispatch(getProdutoSuccess(response.body?.data![0]!));

        setProduct(response.body?.data!);
        setLoading(false);
      } catch (error) {
        console.log((error as Error).message);
        await dispatch(getProdutoFailure((error as Error).message));
        setLoading(false);
      }
    })();
  }, []);

  const adicionarItemParaCarrinho = (item: Produto) => {
    dispatch(
      addItem({
        id: item.ID_PRODUTO,
        image: item.URL_PRODUTO.trim(),
        nome: item.NOME_PRODUTO,
        preco: item.PRECO,
        desconto: 0,
        quantidade: 1,
      })
    );
    Alert.alert(
      "Produto adicionado",
      "Visite seu carrinho para mais operações",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  const finalizarCompra = (item: Produto) => {
    Alert.alert(
      "Recebemos sua compra",
      "Vamos entrar em contato para mais informações",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  return loading ? (
    <Spinner />
  ) : (
    <ScrollViewContainer style={styles.container}>
      {
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          {product !== undefined ? (
            <Image
              source={{
                uri: product
                  ? product[0].URL_PRODUTO
                  : "https://picsum.photos/200/330?random=3",
              }}
              style={{ width: 180, height: 200, alignSelf: "center" }}
              resizeMode={"contain"}
            />
          ) : (
            <></>
          )}
        </View>
      }

      <View style={styles.extraInfoContainer}>
        {/*
          <MProdutoInfo
            name={
              (produto &&
                produto.NOME_PRODUTO &&
                produto?.NOME_PRODUTO!.trim())!
            }
            price={(produto?.PRECO && produto?.PRECO!)!}
            desconto={produto?.DESCONTO!}
          />
          */}

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
        <Text style={{ color: colors.primary, fontSize: 18, padding: 10 }}>
          {product && product[0].NOME_PRODUTO}
        </Text>
        <Text style={{ color: colors.primary, fontSize: 14, padding: 10 }}>
          {product && product[0].DESCRICAO!}
        </Text>
        <Text style={{ color: colors.primary, fontSize: 16, padding: 10 }}>
          {product && product[0].PRECO!}
        </Text>
      </View>
      {/*
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


        */}

      <View style={styles.bottomButtons}>
        <MCustomButton
          style={styles.addToCartButton}
          textStyle={styles.addToCartButtonText}
          text={"Adicionar ao carrinho"}
          onPress={() => adicionarItemParaCarrinho(product![0])}
        />
        <MCustomButton
          style={styles.finalizarCompraButton}
          textStyle={styles.finalizarCompraButtonText}
          text={"Finalizar compra"}
          onPress={() => finalizarCompra(product![0])}
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
