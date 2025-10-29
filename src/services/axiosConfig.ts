// import axios from 'axios';

// // Configuration globale d'Axios
// axios.defaults.baseURL = 'http://localhost:5000/api';
// axios.defaults.headers.common['Content-Type'] = 'application/json';

// // Intercepteur pour ajouter le token aux requêtes
// axios.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default axios;



// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:5000/api', // Assurez-vous que c'est le bon port
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Intercepteur pour ajouter le token
// axiosInstance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;


// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://localhost:5000/api',
// });

// instance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token'); // Assurez-vous que le token est stocké dans localStorage après login/register
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// export default instance;


import axios from 'axios';

// Crée une instance Axios avec une baseURL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplacez par l'URL de votre API
});

// Ajoute un intercepteur pour inclure automatiquement le token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Récupère le token depuis localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
