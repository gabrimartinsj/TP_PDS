import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import Home from "../../screens/Home";
import UserMenu from "../../screens/UserMenu";
const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={UserMenu} />
    </Tab.Navigator>
  );
}
