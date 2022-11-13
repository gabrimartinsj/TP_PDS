import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigation from "../homeNavigation/HomeNavigation";

type Props = {};

export type MainStackParamList = {
  HomeNavigation: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = (props: Props) => {
  return (
    <MainStack.Navigator
      initialRouteName="HomeNavigation"
      screenOptions={({}) => ({
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
      <MainStack.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{ headerShown: false }}
      />

      {
        // casos de uso vem aq
      }
    </MainStack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
