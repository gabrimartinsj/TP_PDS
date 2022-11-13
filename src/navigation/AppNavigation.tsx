import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// <-- Navigators -->
import MainNavigation from "./mainNavigation/MainNavigation";
import { connect, useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";

type Props = {
  isUserAuthenticated?: boolean;
};

export type RootStackParamList = {
  Main: undefined;
  Auth: undefined;
};

const AppNavigation = ({ isUserAuthenticated }: Props) => {
  return (
    <NavigationContainer>
      {true ? <MainNavigation /> : null}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  // isUserAuthenticated: state.auth.isUserAuthenticated,
});

export default connect(mapStateToProps)(AppNavigation);
