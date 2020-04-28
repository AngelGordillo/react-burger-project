import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burguer-f6e80.firebaseio.com'
});

export default instance;