import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
        <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>

            <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>

            <Text>Blue</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>

            <Text>Green</Text>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    heading : {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
       
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
        borderRadius:5,
        margin: 10

     },
    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'blue',
    },
    cardThree: {
        backgroundColor: 'green',
    },
})

const styles = StyleSheet.create({})