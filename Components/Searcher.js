import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Searcher = ({ children, additionalStyles }) => {
  return (
    <View style={{...styles.searcherContainer, ...additionalStyles}}>
        {children}
    </View>
  )
}

export default Searcher

const styles = StyleSheet.create({
    searcherContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        borderRadius: 12
    }
})