import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, OpaqueColorValue } from "react-native";
import Carrinho from "../../screens/carrinho/Carrinho";
import Home from "../../screens/Home";
import UserMenu from "../../screens/userMenu/UserMenu";
import HomeLoja from "../../screens/HomeLoja";
import HomeLojaColecao from "../../screens/HomeLojaColecao";
import { IconButton } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RouteProp, ParamListBase } from "@react-navigation/native";
import UserMenuNavigation from "../userMenuNavigation/UserMenuNavigation";
const Tab = createBottomTabNavigator();

const screenOptionsIcon = (
  route: RouteProp<ParamListBase, string>,
  color: string | OpaqueColorValue | undefined
) => {
  let iconName: any;

  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Carrinho":
      iconName = "cart-outline";
      break;
    case "Sua Conta":
      iconName = "menu";
      break;
    default:
      break;
  }

  return <Ionicons name={iconName} color={color} size={24} />;
};

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptionsIcon(route, color),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
      <Tab.Screen name="Sua Conta" component={UserMenuNavigation} />
    </Tab.Navigator>
  );
}
