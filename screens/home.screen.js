import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => navigation.navigate("Add")}>
        Agregar punto de interés
      </Button>

      <Button mode="contained" onPress={() => navigation.navigate("List")}>
        Ver los puntos guardados
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
  },
});

export default HomeScreen;
