import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigation from "../homeNavigation/HomeNavigation";
import UserMenu from "../../screens/userMenu/UserMenu";
import DadosPessoais from "../../screens/userMenu/DadosPessoais";
import Pedidos from "../../screens/userMenu/Pedidos";
import UltimosProdutosVistos from "../../screens/userMenu/UltimosProdutosVistos";
import Endereco from "../../screens/userMenu/Endereco";
import HomeLoja from "../../screens/loja/HomeLoja";
import HomeLojaColecao from "../../screens/colecao/HomeLojaColecao";
import TelaProduto from "../../screens/produto/TelaProduto";
import Home from "../../screens/home/Home";
import HomeContainer from "../../screens/home/HomeContainer";
import HomeLojaContainer from "../../screens/loja/HomeLojaContainer";
import HomeLojaColecaoContainer from "../../screens/colecao/HomeLojaColecaoContainer";
import ProdutoContainer from "../../screens/produto/ProdutoContainer";

type Props = {};

export type MarketPlaceStackParamList = {
  Home: undefined;
  Loja: {
    id?: number;
  };
  Colecao: {
    id?: number;
  };
  Produto: {
    id?: number;
  };
};

const MarketplaceStack =
  createNativeStackNavigator<MarketPlaceStackParamList>();

const MarketplaceNavigation = (props: Props) => {
  return (
    <MarketplaceStack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        /*
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        */
      })}
    >
      <MarketplaceStack.Screen
        name="Home"
        component={HomeContainer}
        options={{ headerShown: true }}
      />
      <MarketplaceStack.Screen
        name="Loja"
        component={HomeLojaContainer}
        options={{ headerShown: true }}
      />

      <MarketplaceStack.Screen
        name="Colecao"
        component={HomeLojaColecaoContainer}
        options={{ headerShown: true }}
      />

      <MarketplaceStack.Screen
        name="Produto"
        component={TelaProduto}
        options={{ headerShown: true }}
      />

      {
        // casos de uso vem aq
      }
    </MarketplaceStack.Navigator>
  );
};

export default MarketplaceNavigation;
