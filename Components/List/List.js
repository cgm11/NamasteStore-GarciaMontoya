import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import TodoItem from "./TodoItem";
import { colors } from "../../Styles/Colors";

const List = ({ handleModal, todoList }) => {
  const renderTodo = ({ item }) => (
    <TodoItem onPress={handleModal} todo={item}></TodoItem>
  );
  return (
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
  );
};

export default List;

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: colors.darkBrown,
    width: "95%",
    padding: 20,
    flex: 1,
  },
});
