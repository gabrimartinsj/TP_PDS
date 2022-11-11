import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigation from "../homeNavigation/HomeNavigation";
import UserMenu from "../../screens/userMenu/UserMenu";
import DadosPessoais from "../../screens/userMenu/DadosPessoais";
import Pedidos from "../../screens/userMenu/Pedidos";
import UltimosProdutosVistos from "../../screens/userMenu/UltimosProdutosVistos";
import Endereco from "../../screens/userMenu/Endereco";
import HomeLoja from "../../screens/HomeLoja";
import HomeLojaColecao from "../../screens/HomeLojaColecao";
import TelaProduto from "../../screens/TelaProduto";
import Home from "../../screens/Home";

type Props = {};

export type MarketPlaceStackParamList = {
  Home: undefined;
  Loja: undefined;
  Colecao: undefined;
  Produto: undefined;
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
        component={Home}
        options={{ headerShown: true }}
      />
      <MarketplaceStack.Screen
        name="Loja"
        component={HomeLoja}
        options={{ headerShown: true }}
      />

      <MarketplaceStack.Screen
        name="Colecao"
        component={HomeLojaColecao}
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
