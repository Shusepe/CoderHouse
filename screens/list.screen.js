import * as React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";
import { useSelector, connect, useDispatch } from "react-redux";

import ItemList from "../components/itemList.component";
import { deleteAddress } from "../store/actions/address.action";

function ListScreen({ navigation }) {
  const listOfAddresses = useSelector((state) => state.address.listOfAddress);
  const dispatch = useDispatch();

  function onDeleteItem(itemId) {
    dispatch(deleteAddress(itemId));
  }

  return (
    <View style={styles.screen}>
      {listOfAddresses.length > 0 ? (
        <ItemList
          items={listOfAddresses}
          onDeleteItem={onDeleteItem}
          navigation={navigation}
        />
      ) : (
        <Text>No hay Items</Text>
      )}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 0.9,
  },
});

export default connect()(ListScreen);
