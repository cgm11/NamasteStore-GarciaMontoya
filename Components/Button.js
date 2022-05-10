import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from "../Styles/Colors";

const Button = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>
                Add todo
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.darkBrown,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 2
    }
})