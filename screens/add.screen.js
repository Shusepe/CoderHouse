import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useSelector, useDispatch, connect } from "react-redux";

import { addAddress } from "../store/actions/address.action";

function AddScreen() {
  const items = useSelector((state) => state.address.listOfAddress);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");

  function onAddItem() {
    const id = items.length + 1;

    const item = {
      id,
      name: nombre,
      address: direccion,
      description: text,
    };

    dispatch(addAddress(item));
    setText("");
    setNombre("");
    setDireccion("");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Nombre"
          style={styles.input}
          value={nombre}
          onChangeText={(input) => setNombre(input)}
        />
        <TextInput
          label="Dirección"
          style={styles.input}
          value={direccion}
          onChangeText={(input) => setDireccion(input)}
        />
        <TextInput
          label="Descripción"
          style={styles.input}
          value={text}
          onChangeText={(input) => setText(input)}
        />
        <Button
          style={StyleSheet.ButtonContainer}
          mode="contained"
          onPress={() => onAddItem()}
          styles={styles.ButtonContainer}
        >
          Agregar
        </Button>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#E1E8EB",
    flex: 1,
    paddingTop: Platform.OS !== "ios" ? 25 : 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    flex: 0.9,
  },
  ButtonContainer: {
    justifyContent: "flex-end",
  },
});

export default connect()(AddScreen);
