import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Carrinho from "../../screens/Carrinho";
import Home from "../../screens/Home";
import UserMenu from "../../screens/UserMenu";
import HomeLoja from "../../screens/HomeLoja";
import HomeLojaColecao from "../../screens/HomeLojaColecao";
const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Sua Conta" component={UserMenu} />
    </Tab.Navigator>
  );
}
