import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'https://burger-builder-93f48.firebaseio.com/'
});

export default axiosInstance;