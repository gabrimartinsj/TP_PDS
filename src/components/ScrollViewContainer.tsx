import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../styles/theme";

type ScreenContainerProps = {
  children: ReactNode;
  style?: object;
  stickyHeaderIndices?: number[];
};

const ScrollViewContainer = ({
  children,
  style,
  stickyHeaderIndices,
}: ScreenContainerProps) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <ScrollView
      stickyHeaderIndices={stickyHeaderIndices}
      style={[styles.container, { backgroundColor: colors.background }, style]}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollViewContainer;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
