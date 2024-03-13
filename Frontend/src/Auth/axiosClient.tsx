import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://143.248.167.39:8091',
});

export default axiosClient;
