import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListScreen from "../screens/list.screen";
import AddScreen from "../screens/add.screen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
  );
}

export default Navigator;
