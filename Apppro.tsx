import React, { JSX } from 'react';

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';

function Apppro(): JSX.Element {
    const isDarkMode = useColorScheme()=== 'dark';
    return (
        <View style={styles.textStyle}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Welcome to the Apppro Component!
            </Text>
        </View>
    );
    }
const styles = StyleSheet.create({
    textStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 5
    },
    whiteText: {
        color: 'white',
    },
    darkText: {
        color: 'black',
    }
});
export default Apppro;