import axios  from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer lBYp05whd2SA4VF0xDDKjcDAY3J-SeSvfftb9XpKzYtGWaEMa2Ziq6_GD65Rc95mw6MYnFLg2R1Aj_lSdZGDbQKzp_-E5il9YNowFddQGCnAs-MGHv26m2OIVVPmXnYx'
    }
});
