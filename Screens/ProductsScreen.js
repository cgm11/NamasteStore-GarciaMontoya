import { StyleSheet, View, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

import Searcher from "../Components/Searcher";
import { PRODUCTS } from "../Data/products";
import Header from "../Components/Header";
import List from "../Components/List";
import { colors } from "../Styles/Colors";

const ProductsScreen = ({ category = { id: 1, category: "Saludable" }, handleCategory }) => {
  const [input, setInput] = useState("");
  const [initialProducts, setInitialProducts] = useState([]);
  const [productsFilter, setProductsFilter] = useState([]);

  const handleErase = () => setInput("");

  useEffect(() => {
    if (initialProducts.length !== 0) {
      if (input === "") setProductsFilter(initialProducts);
      else {
        const filteredProducts = PRODUCTS.filter((product) =>
          product.name.toLowerCase().includes(input.toLowerCase())
        );
        setProductsFilter(filteredProducts);
      }
    }
  }, [input, initialProducts]);

  useEffect(() => {
    const initialProducts = PRODUCTS.filter(
      (product) => product.category === category.id
    );
    setInitialProducts(initialProducts);
  }, []);

  return (
    <>
      <Header title={category.category} />
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
            placeholder={"Ingrese el producto a buscar"}
          />
          <TouchableOpacity onPress={handleErase}>
            <Entypo name="erase" size={30} color="black" />
          </TouchableOpacity>
        </Searcher>
        <View style={styles.listContainer}>
          <List data={productsFilter} itemType={"Product"} onPress={() => {}} />
          <Button title="Go back" onPress={() => handleCategory(null)}/>
        </View>
      </View>
    </>
  );
};

export default ProductsScreen;

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
