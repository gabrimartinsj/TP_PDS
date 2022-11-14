import { FlatList } from "react-native-gesture-handler";
import ScrollViewContainer from "../../components/ScrollViewContainer";
import LongBox, { LongBoxType } from "../../components/atoms/LongBox";
import Card, { CardType } from "../../components/atoms/Card";
import HorizontalList from "../../components/compose/HorizontalList";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";
import { Section } from "../home/Home";
import { BoxType } from "../../components/atoms/Box";
import { Produto } from "../../@types/entities/Produto";
import { Colecao } from "../../@types/entities/Colecao";
/*
type Colecao = {
  nome: string;
  image: string;
  action?: () => void;
};
*/

type ProductSection = {
  nome: string;
  produtos: Section["items"];
};

type Loja = {
  colecoes: Colecao[];
  sections: ProductSection[];
};

export type Props = {
  loja: Loja;
  produtos: Produto[];
  colecoes: Colecao[];
};

export default function HomeLoja({ loja, produtos, colecoes }: Props) {
  const navigation = useNavigation<NavigationProp<MarketPlaceStackParamList>>();
  /*
  const colecoes: Colecao[] = [
    {
      nome: "Coleção Masculina",
      image: "https://picsum.photos/200/330?random=",
      action: () =>
        navigation.navigate("Colecao", {
          id: 0,
        }),
    },
    {
      nome: "Coleção Feminina",
      image: "https://picsum.photos/220/330?random=",
      action: () =>
        navigation.navigate("Colecao", {
          id: 0,
        }),
    },
  ];
  */
  const produtosSection: Section["items"] = produtos
    ? produtos.map(
        (produto) =>
          ({
            img: produto.URL_PRODUTO.trim(),
            title: produto.NOME_PRODUTO.trim(),
            price: produto.PRECO,
            action: () =>
              navigation.navigate("Produto", {
                id: produto.ID_PRODUTO,
              }),
          } as unknown as CardType)
      )
    : [];
  /*
  const produtos: Produto[] = [
    {
      nome: "Adidas white sneakers for men",
      image: "https://picsum.photos/190/200?random=",
      preco: 68,
      desconto: 50,
      action: () => navigation.navigate("Produto",{ id:0}),
    },
    {
      nome: "Nike black running shoes for men",
      image: "https://picsum.photos/220/220?random=",
      preco: 75,
      desconto: 20,
      action: () => navigation.navigate("Produto",{ id:0}),
    },
    {
      nome: "Adidas white sneakers for men",
      image: "https://picsum.photos/190/200?random=",
      preco: 68,
      desconto: 50,
      action: () => navigation.navigate("Produto",{ id:0}),
    },
    {
      nome: "Nike black running shoes for men",
      image: "https://picsum.photos/220/220?random=",
      preco: 75,
      desconto: 20,
      action: () => navigation.navigate("Produto",{ id:0}),
    },
    {
      nome: "Adidas white sneakers for men",
      image: "https://picsum.photos/190/200?random=",
      preco: 68,
      desconto: 50,
      action: () => navigation.navigate("Produto",{ id:0}),
    },
    {
      nome: "Nike black running shoes for men",
      image: "https://picsum.photos/220/220?random=",
      preco: 75,
      desconto: 20,
      action: () => navigation.navigate("Produto",{ id:0}),
    },
  ];
  */
  const sections: ProductSection[] = [
    {
      nome: "Novos produtos",
      produtos: produtosSection,
    },
    {
      nome: "Vistos recentemente",
      produtos: produtosSection,
    },
  ];

  return (
    <ScrollViewContainer>
      <FlatList
        scrollEnabled={false}
        centerContent
        numColumns={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          alignSelf: "flex-start",
        }}
        data={
          colecoes &&
          colecoes
            .filter((colecao, idx) => idx === 0)
            .map(
              (colecao) =>
                ({
                  title: colecao.NOME_COLECAO && colecao.NOME_COLECAO.trim(),
                  price: "Explorar",

                  action: () =>
                    navigation.navigate("Colecao", { id: colecao.ID_COLECAO }),
                } as LongBoxType)
            )
        }
        renderItem={(item) => (
          <LongBox key={"COL" + item.index.toString()} longbox={item.item} />
        )}
      />
      {sections.map((value, idx) => (
        <HorizontalList
          title={value.nome}
          data={value.produtos}
          renderItem={(item) => (
            <Card
              key={"Prod" + idx.toString() + "." + item.index.toString()}
              card={item.item}
            />
          )}
        />
      ))}
    </ScrollViewContainer>
  );
}
