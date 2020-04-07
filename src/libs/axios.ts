import originalAxios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axios = originalAxios.create();

// axios default settings
axios.defaults.timeout = 2500;
axios.defaults.headers = {
    'Content-Type': 'x-www-form-urlencoded', // default content type
    'Access-Control-Allow-Origin': '*'
};

// axios-mock-adapter
export const axiosMock = (options = {}) => new MockAdapter(axios, options);

export default axios;
