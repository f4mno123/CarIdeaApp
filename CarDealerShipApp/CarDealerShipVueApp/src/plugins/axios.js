import axios from 'axios';
import router from '../router/index';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    const modifiedConfig = {...config };

    modifiedConfig.headers = {
      ...modifiedConfig.headers,
      Authorization: `Bearer ${token}`,
    };
    return modifiedConfig;  
  }
  localStorage.removeItem('token');
  router.push('/auth/login');

  return config;
}, (error) => {
  Promise.reject(error);
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    const { status } = error.response;
    console.log(status);
    if (status === 401) {
      router.push('/auth/login');
    }
    router.push('/auth/login');
    return Promise.reject(error);
  },
);

export default axios;
