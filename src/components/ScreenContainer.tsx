import { View, Text, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../styles/theme";

type ScreenContainerProps = {
  children: ReactNode;
};

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {children}
    </View>
  );
};

export default ScreenContainer;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
