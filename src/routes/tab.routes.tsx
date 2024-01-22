import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import Home from "../screens/home";
import Search from "../screens/search";

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#222222",
    borderTopWidth: 0,
  },
  tabBarActiveTintColor: "#8b5cf6",
};

export default function TabRoutes() {
  return (
    <Tab.Navigator {...{ screenOptions }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={20} />,
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="search" color={color} size={20} />,
          tabBarLabel: "Search",
        }}
      />
    </Tab.Navigator>
  );
}
