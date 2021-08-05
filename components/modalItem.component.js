import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Button } from 'react-native-paper';

export default function ModalItem({ modalVisible, setModalVisible, item, onDelete }) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" visible={modalVisible} transparent onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalMessage}>Esta seguro que desea borrar "{item.name}"?</Text>
            <View>
              <Button mode="contained" onPress={() => onDelete(item.id)}>
                Confirmar
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalMessage: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
