import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "../Components/Header";
import List from "../Components/List/List";
import CustomModal from "../Components/CustomModal";

const Layout = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [todoSelected, setTodoSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

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
      <Header handleAdd={handleAdd} input={input} setInput={setInput} />
      <List handleModal={handleModal} todoList={todoList} />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        todoSelected={todoSelected}
      />
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
});
