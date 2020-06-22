import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://burger-builder-93f48.firebaseio.com/'
});

export default axiosInstance;