import axios from 'axios';
const api = axios.create({
  baseURL: 'https://mydemo.free.beeceptor.com',  
});

export default api;
