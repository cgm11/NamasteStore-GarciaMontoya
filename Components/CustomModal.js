import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

import { colors } from "../Styles/Colors";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  handleEdit,
  handleDelete,
  todoSelected,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.close}>X</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.editInput}
            placeholder="Edit todo"
            onChangeText={handleEdit}
            value={todoSelected.todo}
          />
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.delete}>Eliminar todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    height: 140,
    width: 300,
    backgroundColor: colors.grey,
  },
  close: {
    textAlign: "right",
    marginRight: 10,
    fontSize: 24,
  },
  editInput: {
    borderRadius: 8,
    borderWidth: 1,
    width: 280,
    margin: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
    backgroundColor: colors.grey,
  },
  delete: {
    marginLeft: 10,
    fontSize: 16,
    marginTop: 20,
  },
});
