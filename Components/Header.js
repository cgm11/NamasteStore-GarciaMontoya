import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import ButtonCustom from "../Components/Button";
import { colors } from "../Styles/Colors";

const Header = ({input, setInput, handleAdd}) => {
  

  return (
    <View style={styles.topContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add todo"
        onChangeText={setInput}
        value={input}
      />
      <ButtonCustom onPress={handleAdd} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
});
