import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar, useTheme } from "react-native-paper";
import { CustomTheme } from "../styles/theme";

type Props = {
  searchQuery: string;
  setSearchQuery: Function;
  placeholder: string;
  style?: object;
  autoFocus?: boolean;
};

const MSearchBar = ({
  searchQuery,
  setSearchQuery,
  placeholder = "Buscar por",
  autoFocus = false,
  style = {
    backgroundColor: "#fff",
    width: "98%",
    alignSelf: "center",
  },
}: Props) => {
  const { colors } = useTheme() as CustomTheme;

  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <Searchbar
      style={style}
      placeholder={placeholder}
      onChangeText={onChangeSearch}
      value={searchQuery}
      //autoFocus={autoFocus}
    />
  );
};

export default MSearchBar;

const styles = StyleSheet.create({});
