import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        //price == '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => 
                    searchApi(term)
                } 
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultByPrice('$$')} title="Bit Pricer" />
                <ResultsList results={filterResultByPrice('$$$')} title="Bit Spender" />
            </ScrollView>
        </>
    );
}

const styles=StyleSheet.create({
    container: {
        marginLeft: 10
    }

});

export default SearchScreen;