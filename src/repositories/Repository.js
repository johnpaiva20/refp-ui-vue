import axios from 'axios';
const baseDomain = 'https://refp-api.herokuapp.com/';
const baseURL = `${baseDomain}/`;

export default axios.create(
    {baseURL}
);
