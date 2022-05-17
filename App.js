import { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'

import CategoriesScreen from "./Screens/CategoriesScreen";
import ProductsScreen from "./Screens/ProductsScreen";

export default function App() {
  const [categorySelected, setCategorySelected] = useState(null);

  const [loaded] = useFonts({
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf')
  })

  if(!loaded) {
    return <ActivityIndicator />;
  }

  const handleCategory = (category) => {
    setCategorySelected(category);
  };

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <ProductsScreen category={categorySelected} handleCategory={handleCategory}/>
      ) : (
        <CategoriesScreen handleCategory={handleCategory} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    // justifyContent: "center",
  },
});
