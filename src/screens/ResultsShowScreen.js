import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {

    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    },[]);

    if(!result) {
        return <Text style={styles.textOne}>Loading....</Text>
    }

    return (
        <View>
            <Text style={styles.textOne}>{result.name}</Text>
            <FlatList
            style={styles.list}
                data={result.photos}
                keyExtractor = { photo => photo}
                renderItem = {({ item }) => {
                    return <Image style={styles.image} source = {{ uri: item }}/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        borderRadius: 5,
        marginBottom: 20
    },
    textOne: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 20
    },
    list: {
        alignSelf: 'center'
    }
});

export default ResultsShowScreen;
