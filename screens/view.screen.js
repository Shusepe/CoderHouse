import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ViewScreen({ route }) {
  const { name, address, description } = route.params;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>

      <Text>{address}</Text>

      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default ViewScreen;
