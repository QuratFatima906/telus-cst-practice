import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://99.79.3.214:9004/api/v1/',
    timeout: 900000,
});
export default instance;