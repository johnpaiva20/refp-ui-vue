import axios from 'axios';
const baseURL = `${process.env.VUE_APP_BASE_API_URL}`;
export default axios.create({ baseURL })
