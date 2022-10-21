import "react-native-gesture-handler";
import React from "react";
import { Provider, useSelector } from "react-redux";
import store, { persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar, Platform, UIManager, LogBox } from "react-native";
import theme from "./src/styles/theme";
import AppNavigation from "./src/navigation/AppNavigation";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
LogBox.ignoreLogs(["EventEmitter.removeListener"]);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="default" />
          <AppNavigation />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
