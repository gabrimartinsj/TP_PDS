import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigation from "../homeNavigation/HomeNavigation";
import UserMenu from "../../screens/userMenu/UserMenu";
import DadosPessoais from "../../screens/userMenu/DadosPessoais";
import Pedidos from "../../screens/userMenu/Pedidos";
import UltimosProdutosVistos from "../../screens/userMenu/UltimosProdutosVistos";
import Endereco from "../../screens/userMenu/Endereco";

type Props = {};

export type UserMenuStackParamList = {
  ["Sua Conta"]: undefined;
  ["Dados Pessoais"]: undefined;
  Pedidos: undefined;
  UltimosProdutosVistos: undefined;
  Enderecos: undefined;
};

const UserMenuStack = createNativeStackNavigator<UserMenuStackParamList>();

const UserMenuNavigation = (props: Props) => {
  return (
    <UserMenuStack.Navigator
      initialRouteName="Sua Conta"
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
      <UserMenuStack.Screen
        name="Sua Conta"
        component={UserMenu}
        options={{ headerShown: false }}
      />

      <UserMenuStack.Screen
        name="Dados Pessoais"
        component={DadosPessoais}
        options={{ headerShown: false }}
      />

      <UserMenuStack.Screen
        name="Pedidos"
        component={Pedidos}
        options={{ headerShown: false }}
      />

      <UserMenuStack.Screen
        name="UltimosProdutosVistos"
        component={UltimosProdutosVistos}
        options={{ headerShown: false }}
      />

      <UserMenuStack.Screen
        name="Enderecos"
        component={Endereco}
        options={{ headerShown: false }}
      />

      {
        // casos de uso vem aq
      }
    </UserMenuStack.Navigator>
  );
};

export default UserMenuNavigation;

const styles = StyleSheet.create({});
