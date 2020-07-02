import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log("hi there");
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong!!');
        }
    }

    //Bad code: call searchApi when component is first rendered
    // searchApi('pasta');

    useEffect(()=> {
        searchApi('pasta');
    },[]);

    return [searchApi, results, errorMessage];
};