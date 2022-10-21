import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconButton, useTheme } from "react-native-paper";
import { CustomTheme } from "../styles/theme";

export type MenuItemListType = {
  icon?: string;
  title: string;
  action?: () => void;
  description?: string;
};

type Props = {
  menuItemList: MenuItemListType;
};

const MenuItemList = ({
  menuItemList: { icon, title, action, description },
}: Props) => {
  const { colors } = useTheme() as CustomTheme;

  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <>
        <View style={styles.headContainer}>
          {icon && <IconButton icon={icon} />}

          {description ? (
            <View>
              <Text style={[styles.text, { color: colors.primary }]}>
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  paddingHorizontal: 10,
                  color: colors.text,
                }}
              >
                {description}
              </Text>
            </View>
          ) : (
            <Text style={[styles.text, { color: colors.primary }]}>
              {title}
            </Text>
          )}
        </View>
      </>

      <IconButton icon={"chevron-right"} />
    </TouchableOpacity>
  );
};

export default MenuItemList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    height: 65,
    marginVertical: 5,
  },
  headContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "80%",
  },
  text: {
    textAlign: "left",
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
/*

style={{
          //borderWidth: 1,
          width: '80%',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
        }}

*/
