import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Chip, IconButton, Colors } from "react-native-paper";

import ModalItem from "./modalItem.component";

export default function Item({ data, onDelete, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View key={data.id} style={styles.container}>
      <View style={styles.itemContainer}>
        <Chip
          icon="arrow-right-drop-circle"
          onPress={() => navigation.navigate("View", data)}
        >
          {data.name}
        </Chip>
        <IconButton
          icon="delete"
          color={Colors.red500}
          size={20}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <ModalItem
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={data}
        onDelete={onDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  name: {
    fontSize: 20,
    color: "#343A40",
    marginBottom: 5,
    fontFamily: "KronaOne-Regular",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    padding: 10,
  },
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
