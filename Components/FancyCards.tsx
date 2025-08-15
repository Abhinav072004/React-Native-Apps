import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style = {styles.heading}>FancyCards</Text>
      <View style = {[styles.card , styles.cardElevated]}>
        <Image source={{ uri: 'assets\pexels-anjana-c-169994-674010.jpg' }} 
        style={styles.cardImage} />

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Card Title</Text>
          <Text style={styles.cardDescription}>This is a description of the card. It can contain more detailed information.</Text>
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    card: {
        width: '90%',
        height: 300,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: '5%',
    },
    cardElevated: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Android shadow
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    cardContent: {
        marginTop: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
})

