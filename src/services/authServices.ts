// export async function login(username: string, password: string): Promise<{ token: string; message: string }> {
//   try {
//     const response = await fetch('http://localhost:3000/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error('Erreur lors de la connexion. Vérifiez vos identifiants.');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error: any) {
//     throw new Error(error.message || 'Erreur inconnue lors de la connexion.');
//   }
// }


// import axios from 'axios';

// const API_URL = 'http://localhost:8080/login'; // Remplacez par l'URL de votre serveur

// export const login = async (username: string, password: string) => {
//   try {
//     const response = await axios.post(API_URL, { username, password });
//     // Assurez-vous que la réponse contient un token
//     if (response.data.token) {
//       localStorage.setItem('token', response.data.token); // Vous pouvez aussi utiliser un cookie
//       return response.data;
//     } else {
//       throw new Error('Token manquant dans la réponse');
//     }
//   } catch (error: any) {
//     throw new Error(error.response?.data?.message || 'Erreur de connexion');
//   }
// };

// Fonction d'inscription (register)
// export const register = async (username: string, password: string) => {
//   const response = await axios.post(`${API_URL}/register`, { username, password });
//   return response.data; // Retourne les données de la réponse
// };



// import axios from 'axios';

// export const login = async (username: string, password: string) => {
//   try {
//     const response = await axios.post('http://localhost:8080/login', {
//       username,
//       password
//     });
//     return response.data;
//   } catch (error: unknown) {
//     // Vérification si l'erreur est une instance de Error
//     if (axios.isAxiosError(error)) {
//       // Vous pouvez maintenant accéder aux propriétés spécifiques d'Axios en toute sécurité
//       console.error('Erreur Axios:', error.response?.data?.message || error.message);
//     } else if (error instanceof Error) {
//       // Si l'erreur est une instance d'Error standard
//       console.error('Erreur standard:', error.message);
//     } else {
//       console.error('Erreur inconnue:', error);
//     }
//     throw error;
//   }
// };







// import axios from 'axios';

// // Base URL configuration
// axios.defaults.baseURL = 'http://localhost:3000'; // Changez si nécessaire

// // Service pour enregistrer un utilisateur
// export const register = async (username: string, password: string, role: string) => {
//   const response = await axios.post('/auth/register', { username, password, role });
//   return response.data;
// };

// // Service pour connecter un utilisateur
// export const login = async (username: string, password: string) => {
//   const response = await axios.post('/auth/login', { username, password });
//   const { token } = response.data;

//   // Stocker le token dans localStorage
//   localStorage.setItem('token', token);
//   return token;
// };

// // Service pour récupérer le rôle actuel
// export const getRoleFromToken = (): string | null => {
//   const token = localStorage.getItem('token');
//   if (!token) return null;

//   const payload = JSON.parse(atob(token.split('.')[1]));
//   return payload.role;
// };

// // Service pour déconnecter l'utilisateur
// export const logout = () => {
//   localStorage.removeItem('token');
// };

// // Service pour configurer l'en-tête d'autorisation
// export const setAuthHeader = () => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };





import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = async (username: string, email: string, password: string, role: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { 
      username, 
      email, 
      password, 
      role 
    });
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', role);
    }
    return response.data;
  } catch (error) {
    console.error('Erreur d\'inscription :', error);
    throw error;
  }
};

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { 
      username, 
      password 
    });
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userRole', response.data.role);
    }
    return response.data;
  } catch (error) {
    console.error('Erreur de connexion :', error);
    throw error;
  }
};