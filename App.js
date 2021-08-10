import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";

import Store from "./store";
import HomeScreen from "./screens/home.screen";
import ListScreen from "./screens/list.screen";
import AddScreen from "./screens/add.screen";
import ViewScreen from "./screens/view.screen";
import MapScreen from "./screens/map.screen";

import { init } from "./db";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Database failed to connect");
    console.log(error);
  });

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Map">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add" component={AddScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="View" component={ViewScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
