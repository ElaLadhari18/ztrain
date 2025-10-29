// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('client'); // Par défaut, "client"
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post('/auth/register', { username, password, role });
//       alert('Enregistrement réussi !');
//       navigate('/login');
//     } catch (err) {
//       console.error(err);
//       setError('Erreur lors de l’enregistrement');
//     }
//   };

//   return (
//     <div>
//       <h2>Enregistrement</h2>
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
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="client">Client</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button type="submit">S'enregistrer</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Register;



// import React, { useState } from 'react';

// const Register: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('client');
//   const [error, setError] = useState('');

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password, role })
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('User registered successfully');
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Something went wrong!');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleRegister}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="client">Client</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Register;



// import { useState } from 'react';
// import { register } from '../services/authServices';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('client');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await register(username, password, role);
//       window.location.href = '/login';
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <select onChange={(e) => setRole(e.target.value)}>
//         <option value="client">Client</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;import React, { useState } from 'react';
import { useState } from 'react';
import { register } from '../services/authServices';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Tentative d\'inscription avec :', { username, email, role }); // Log de débogage
      
      const response = await register(username, email, password, role);
      
      console.log('Réponse d\'inscription :', response); // Log de la réponse

      // Vérification du token
      const token = localStorage.getItem('token');
      console.log('Token stocké :', token);

      // Redirection après inscription
      navigate('/login');
    } catch (error: any) {
      console.error('Erreur d\'inscription :', error); // Log de l'erreur
      
      if (error.response) {
        // L'erreur vient du serveur
        setError(error.response.data.message || 'Échec de l\'inscription');
      } else if (error.request) {
        // La requête a été faite mais pas de réponse
        setError('Pas de réponse du serveur');
      } else {
        // Erreur lors de la configuration de la requête
        setError('Erreur lors de l\'inscription');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Inscription</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            <label htmlFor="role" className="block mb-2">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            S'inscrire
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>
            Have you an account ?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
Sign in            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;