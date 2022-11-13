import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../styles/theme";

type Props = {
  title: string;
  data: any;
  renderItem: ListRenderItem<any>;
};

const HorizontalList = ({ data, title, renderItem }: Props) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <View style={styles.sectionListContainer}>
      <Text style={[styles.sectionListTitle, { color: colors.text }]}>
        {title}
      </Text>
      <FlatList
        horizontal
        centerContent
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  sectionListContainer: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 0,

    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  sectionListTitle: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
