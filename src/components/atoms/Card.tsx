import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../styles/theme";

export type CardType = {
  img: string;
  title: string;
  price: string;
  action?: () => void;
};

type Props = {
  card: CardType;
};

const Card = ({ card: { img, title, price, action } }: Props) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.backgroundItem }]}
      onPress={action}
    >
      <Image style={styles.img} source={{ uri: img }} />
      <View style={styles.cardInfo}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.title, { color: colors.primary }]}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    width: 140,
    height: 200,
    borderRadius: 16,
    padding: 5,
    margin: 10,
    //elevation: 3,
  },
  title: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 5,
    //alignSelf: 'center',
  },
  cardInfo: {
    marginVertical: 5,
    justifyContent: "space-around",
    //borderWidth: 1,
    height: "30%",
    width: "90%",
    alignItems: "flex-start",
    // flexWrap: 'wrap',
  },
});
