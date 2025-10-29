// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/auth/login', { username, password });
//       const { token } = response.data;

//       // Stocker le token JWT
//       localStorage.setItem('token', token);

//       // Décoder le rôle depuis le token (facultatif si le backend ne retourne pas le rôle)
//       const payload = JSON.parse(atob(token.split('.')[1]));
//       const role = payload.role;

//       // Rediriger en fonction du rôle
//       if (role === 'admin') navigate('/admin');
//       else if (role === 'client') navigate('/client');
//       else setError('Rôle inconnu');
//     } catch (err) {
//       console.error(err);
//       setError('Identifiants incorrects');
//     }
//   };

//   return (
//     <div>
//       <h2>Connexion</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Nom d'utilisateur"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Se connecter</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simuler une requête d'authentification
//     try {
//       // Exemple de données fictives, remplacez par un appel API réel
//       const response = await fakeAuthRequest(email, password);

//       if (response.success) {
//         // Enregistrer le token et le rôle dans localStorage
//         localStorage.setItem('token', response.token);
//         localStorage.setItem('role', response.role); // 'admin' ou 'client'

//         // Rediriger selon le rôle
//         if (response.role === 'admin') {
//           navigate('/admin');
//         } else {
//           navigate('/client');
//         }
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// // Simuler une requête d'authentification (remplacez par un vrai appel API)
// const fakeAuthRequest = async (email: string, password: string) => {
//   // Simuler une réponse API
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (email === 'admin@example.com' && password === 'admin123') {
//         resolve({ success: true, token: 'fakeAdminToken', role: 'admin' });
//       } else if (email === 'client@example.com' && password === 'client123') {
//         resolve({ success: true, token: 'fakeClientToken', role: 'client' });
//       } else {
//         resolve({ success: false });
//       }
//     }, 1000);
//   });
// };

// // export default Login;
// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Configurez CORS pour autoriser le frontend React à faire des requêtes
// app.use(cors({
//   origin: 'http://localhost:5176',  // L'adresse du frontend React
//   methods: ['GET', 'POST'],        // Méthodes autorisées
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true,               // Si vous utilisez des cookies ou des sessions
// }));

// // Middleware pour parser le corps des requêtes en JSON
// app.use(express.json());

// // Exemple de route pour la connexion
// app.post('/api/auth/login', (req, res) => {
//   const { username, password } = req.body;
  
//   // Votre logique de connexion (à adapter selon vos besoins)
//   if (username === 'test' && password === 'password') {
//     return res.status(200).json({ message: 'Login successful' });
//   } else {
//     return res.status(400).json({ message: 'Invalid credentials' });
//   }
// });

// // Démarrage du serveur
// app.listen(5000, () => {
//   console.log('Server is running on http://localhost:5000');
// // });

// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   // Fonction handleLogin pour gérer la soumission du formulaire
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Envoi de la requête POST
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           password,
//         }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login successful:', data);
//         // Vous pouvez ici rediriger l'utilisateur ou effectuer une action après la connexion réussie
//       } else {
//         const errorData = await response.json();
//         console.error('Login failed:', errorData);
//         setError('Invalid username or password');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError('An error occurred while trying to log in.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Autoriser les requêtes venant de http://localhost:5176 (frontend React)
// app.use(cors({
//   origin: 'http://localhost:5176', // Remplacez par l'adresse de votre frontend
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true, // Si vous devez gérer les cookies ou les sessions
// }));

// // Votre configuration des routes et autres middleware ici
// app.post('/api/auth/login', (req, res) => {
//   // Votre logique de connexion ici
// });

// // Démarrer le serveur
// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });
// import React, { useState } from 'react';

// const Login = () => {
//   // Votre logique de connexion ici
//   return (
//     <div>
//       <h1>Login Page</h1>
//       {/* Formulaire de connexion */}
//     </div>
//   );
// };

// export default Login; // L'exportation par défaut du composant
import React, { useState } from 'react';
import { login } from '../services/authServices';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Tentative de connexion avec :', username);
      const response = await login(username, password);
      console.log('Réponse de connexion :', response);

      const token = localStorage.getItem('token');
      console.log('Token stocké :', token);

      if (response.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/client');
      }
    } catch (error: any) {
      console.error('Erreur de connexion :', error);
      if (error.response) {
        setError(error.response.data.message || 'Échec de la connexion');
      } else if (error.request) {
        setError('Pas de réponse du serveur');
      } else {
        setError('Erreur lors de la connexion');
      }
    }
  };

  const handleGoogleLogin = () => {
    // Redirection vers l'endpoint backend pour Google OAuth
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mt-2"
          >
            Login with Google
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
