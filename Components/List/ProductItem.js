import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../Styles/Colors";

const ProductItem = ({ product }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{product.name}</Text>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    marginVertical: 15
  },
  card: {
      backgroundColor: colors.darkBlue,
      justifyContent: "center",
      alignItems: "center", 
      marginVertical: 20
  },
  text: {
      fontSize: 20,
      color: '#fff'
  },
  description: {
      fontSize: 16,
      color: '#fff',
      padding: 20,
      textAlign: 'center'
  }
});
