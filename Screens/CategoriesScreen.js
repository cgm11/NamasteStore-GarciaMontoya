import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

import Header from "../Components/Header";
import Searcher from "../Components/Searcher";
import { colors } from "../Styles/Colors";
import List from "../Components/List";
import { CATEGORIES } from "../Data/categories";

const CategoriesScreen = ({handleCategory}) => {
  const [input, setInput] = useState("");
  const [categoriesFilter, setCategoriesFilter] = useState(CATEGORIES);

  const handleErase = () => setInput("")

  const handleSelectedcategory = (category) => {
    handleCategory(category)
  }
  
  useEffect(() => {
    if (input !== "") {
      const filteredCategories = CATEGORIES.filter((category) =>
        category.category.toLowerCase().includes(input.toLowerCase())
      );
      setCategoriesFilter(filteredCategories);
    } else {
      setCategoriesFilter(CATEGORIES);
    }
  }, [input]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Searcher
          additionalStyles={{
            backgroundColor: colors.ligthBlue,
          }}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            keyBordType="default"
            style={styles.input}
          />
          <TouchableOpacity onPress={handleErase}>
            <Entypo name="erase" size={30} color="black" />
          </TouchableOpacity>
        </Searcher>
        <View style={styles.listContainer}>
          <List data={categoriesFilter} itemType={"category"} onPress={handleSelectedcategory}/>
        </View>
      </View>
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    backgroundColor: "black",
    borderRadius: 10,
    color: "white",
    height: 50,
  },
  listContainer: {
    flex: 1
  }
});
