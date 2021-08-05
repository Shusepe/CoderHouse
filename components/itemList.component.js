import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Item from "./item.component";

export default function ItemList({ items, onDeleteItem, navigation }) {
  return (
    <SafeAreaView style={styles.list}>
      {items.map((itemData) => (
        <Item
          style={styles.type}
          key={itemData.id}
          data={itemData}
          onDelete={onDeleteItem}
          navigation={navigation}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 30,
  },
});
