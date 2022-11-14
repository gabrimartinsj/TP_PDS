import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenContainer from "../../components/ScreenContainer";
import MSearchBar from "../../components/MSearchBar";
import MCarousel from "../../components/MCarousel";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Box, { BoxType } from "../../components/atoms/Box";
import LongBox, { LongBoxType } from "../../components/atoms/LongBox";
import Card, { CardType } from "../../components/atoms/Card";
import HorizontalList from "../../components/compose/HorizontalList";
import ScrollViewContainer from "../../components/ScrollViewContainer";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../styles/theme";
import { MarketPlaceStackParamList } from "../../navigation/marketplaceNavigation/MarketPlaceNavigation";
import { Loja } from "../../@types/entities/Loja";
import { Produto } from "../../@types/entities/Produto";

type Props = {
  lojas?: Loja[];
  produtos?: Produto[];
};

type categoria = {
  icon: string;
  label: string;
};

export type Section = {
  title: string;
  items: BoxType[] | LongBoxType[] | CardType[];
};

const Home = ({ lojas, produtos }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = useNavigation<NavigationProp<MarketPlaceStackParamList>>();
  const lojasSection: Section["items"] = lojas
    ? lojas.map((loja) => ({
        title: loja.NOME_LOJA,
        img:
          "https://picsum.photos/200/300?random=" +
          (Math.random() * (100 - 1) + 1).toString(),
        price: "Explorar",
        action: () => navigation.navigate("Loja", { id: loja.ID_LOJA }),
      }))
    : [];

  const produtosSection: Section["items"] = produtos
    ? produtos.map(
        (produto) =>
          ({
            icon: "photo",
            img: produto.URL_PRODUTO.trim(),
            title: produto.NOME_PRODUTO.trim(),
            price: produto.PRECO,
            action: () =>
              navigation.navigate("Produto", {
                id: produto.ID_PRODUTO,
              }),
          } as BoxType)
      )
    : [];

  const HomeSections: Section[] = [
    {
      title: "Categorias",
      items: [
        {
          icon: "shopping-search",
          title: "Fashion",
          action: () => navigation.navigate("Home"),
        },

        {
          icon: "laptop",
          title: "Eletrônicos",
          action: () => navigation.navigate("Home"),
        },
        {
          icon: "fridge",
          title: "Furniture",
          action: () => navigation.navigate("Home"),
        },
        {
          icon: "soy-sauce",
          title: "Beauty",
        },
        {
          icon: "fruit-grapes",
          title: "Food",
          action: () => navigation.navigate("Home"),
        },
      ],
    },
    {
      title: "Meu Perfil",
      items: [
        {
          icon: "badge-account",
          title: "Perfil de Consumo",
        },
        {
          icon: "cart-outline",
          title: "Minhas Compras",
        },
        {
          icon: "shopping-search",
          title: "Lojas Próximas",
        },
        {
          icon: "badge-account",
          title: "Perfil de Consumo",
        },
        {
          icon: "cart-outline",
          title: "Minhas Compras",
        },
      ],
    },

    {
      title: "Lojas",
      items: true
        ? lojasSection
        : [
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Mundo Moda",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Auto Shop",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Mundo Moda",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Auto Shop",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Mundo Moda",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Auto Shop",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Auto Shop",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Mundo Moda",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Auto Shop",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Auto Shop",
              price: "Explorar",
              action: () =>
                navigation.navigate("Loja", {
                  id: 0,
                }),
            },
          ],
    },
    {
      title: "Ofertas quentes",
      items: true
        ? produtosSection
        : [
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto A",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto B",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto A",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto B",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto A",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto B",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto A",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
            {
              img:
                "https://picsum.photos/200/300?random=" +
                (Math.random() * (100 - 1) + 1).toString(),
              title: "Produto B",
              price: "R$ 3x de 39,90",
              action: () => navigation.navigate("Produto", { id: 0 }),
            },
          ],
    },
  ];

  const { colors } = useTheme() as CustomTheme;

  return (
    <ScrollViewContainer>
      <MSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder={"Buscar"}
      />
      <View style={styles.carouselContainer}>
        <MCarousel />
      </View>
      <View style={{ marginTop: 10 }}>
        <HorizontalList
          title={HomeSections[0].title}
          data={HomeSections[0].items as BoxType[]}
          renderItem={(item) => <Box key={item.index} box={item.item} />}
        />
      </View>

      <View>
        <View style={styles.sectionListContainer}>
          <Text style={[styles.sectionListTitle, { color: colors.text }]}>
            {HomeSections[2].title}
          </Text>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 5 }}
          >
            <FlatList
              scrollEnabled={false}
              centerContent
              numColumns={Math.ceil(HomeSections[2].items.length / 2)}
              //numColumns={2}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              contentContainerStyle={{
                alignSelf: "flex-start",
              }}
              data={HomeSections[2].items as LongBoxType[]}
              renderItem={(item) => (
                <LongBox key={item.index} longbox={item.item} />
              )}
            />
            <View></View>
          </ScrollView>
        </View>
      </View>
      <HorizontalList
        title={HomeSections[3].title}
        data={HomeSections[3].items as CardType[]}
        renderItem={(item) => <Card key={item.index} card={item.item} />}
      />
      <HorizontalList
        title="Combinam com seu perfil"
        data={HomeSections[3].items as CardType[]}
        renderItem={(item) => <Card key={item.index} card={item.item} />}
      />
    </ScrollViewContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  sectionListContainer: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 0,

    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sectionListTitle: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
