import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconButton, useTheme } from "react-native-paper";
import { CustomTheme } from "../../styles/theme";

export type BoxType = {
  icon: string;
  title: string;
  action?: () => void;
};

type Props = {
  box: BoxType;
};

const Box = ({ box: { icon, title, action } }: Props) => {
  const { colors } = useTheme() as CustomTheme;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.disabled }]}
      onPress={action}
    >
      <IconButton icon={icon} size={30} />
      <Text style={[styles.title, { color: colors.primary }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 0,
    margin: 8,
    elevation: 3,
    //borderWidth: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
});
