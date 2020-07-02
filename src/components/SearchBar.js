import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather 
                style={styles.iconStyle}
                name="search" />
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                style={styles.input} 
                placeholder="Search"
                value={term}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        margin: 15,
        marginBottom: 10
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;