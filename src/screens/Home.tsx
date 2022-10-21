import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScreenContainer from "../components/ScreenContainer";
import MSearchBar from "../components/MSearchBar";
import MCarousel from "../components/MCarousel";

type Props = {};

type categoria = {
  icon: string;
  label: string;
};

const Home = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const categorias: categoria[] = [
    {
      icon: "camera",
      label: "fashion",
    },
    {
      icon: "camera",
      label: "Eletronicos",
    },
    {
      icon: "camera",
      label: "Eletronicos",
    },
  ];

  return (
    <ScreenContainer>
      <MSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder={"Buscar"}
      />
      <View style={styles.carouselContainer}>
        <MCarousel />
      </View>
      <View></View>
    </ScreenContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
