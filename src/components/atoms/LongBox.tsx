import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { BoxType } from "./Box";
import { CustomTheme } from "../../styles/theme";
export type LongBoxType = Omit<BoxType, "icon"> & {
  price: string;
  img: string;
};

type Props = {
  longbox: LongBoxType;
};

const LongBox = ({ longbox: { img, title, action, price } }: Props) => {
  const { colors } = useTheme() as CustomTheme;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.backgroundItem }]}
      onPress={action}
    >
      <Image style={styles.img} source={{ uri: img }} />
      <View style={styles.longboxInfo}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.title, { color: colors.primary }]}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LongBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
    width: 230,
    height: 100,
    borderRadius: 16,
    padding: 5,
    margin: 8,
    elevation: 3,
    //borderWidth: 1,
  },
  title: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "bold",
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: "center",
  },
  longboxInfo: {
    margin: 5,
    justifyContent: "space-between",

    alignItems: "flex-start",
    flexWrap: "wrap",
    height: "80%",
    width: "50%",
  },
});
