import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Info } from "~/lib/icons/Info";
import { Home as HomeIcon } from "~/lib/icons/Home";
import SettingsScreen from "./settings";
import HomeScreen from "./homeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Info size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
