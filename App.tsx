import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";

import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar, Platform, UIManager, LogBox } from "react-native";
import theme from "./src/styles/theme";
import AppNavigation from "./src/navigation/AppNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getLojasStart } from "./src/features/marketplace/marketplaceActions/marketplaceActions";
import { getProdutosStart } from "./src/features/produto/produtoActions/produtoActions";
enableScreens(false);
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
          <GestureHandlerRootView style={{ flex: 1 }}>
            <AppNavigation />
          </GestureHandlerRootView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
