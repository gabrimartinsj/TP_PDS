import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { ScreenContainer } from "react-native-screens";
const Spinner = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>

        <ActivityIndicator
          style={[styles.horizontal]}
          size="large"
          color="#0000ff"
        />
      </SafeAreaView>
    </>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
