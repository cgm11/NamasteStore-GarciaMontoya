import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import TodoItem from "../Components/TodoItem";
import { colors } from "../Styles/Colors";
import ButtonCustom from "../Components/Button";

const Layout = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [todoSelected, setTodoSelected] = useState({});

  const handleAdd = () => {
    if (input !== "") {
      setTodoList([...todoList, { id: Date.now(), todo: input }]);
      setInput("");
    }
  };

  const handleModal = (todoSelected) => {
    setModalVisible(!modalVisible);
    setTodoSelected(todoSelected);
  };

  const renderTodo = ({ item }) => (
    <TodoItem onPress={handleModal} todo={item}></TodoItem>
  );

  const handleDelete = () => {
    const todosFiltrados = todoList.filter(
      (todo) => todo.id !== todoSelected.id
    );
    setTodoList(todosFiltrados);
    setModalVisible(false);
  };

  const handleEdit = (text) => {
    const todoToEdit = todoList.find((todo) => todo.id === todoSelected.id);
    //const todoListFiltered = todoList.filter(todo => todo.id !== todoSelected.id)
    todoToEdit.todo = text;
    setTodoList([...todoList]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add todo"
          onChangeText={setInput}
          value={input}
        />
        <ButtonCustom onPress={handleAdd} />
      </View>
      <View style={styles.itemList}>
        {todoList.length !== 0 ? (
          <FlatList
            data={todoList}
            keyExtractor={(todo) => todo.id}
            renderItem={renderTodo}
          />
        ) : (
          <Text>No hay todos cargados</Text>
        )}
      </View>
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
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    flex: 0.2,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    width: 200,
    marginRight: 10,
    paddingHorizontal: 8,
    fontSize: 18,
    height: 35,
    backgroundColor: colors.grey,
  },
  itemList: {
    backgroundColor: colors.darkBrown,
    width: "95%",
    padding: 20,
    flex: 1,
  },
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
  }
});
