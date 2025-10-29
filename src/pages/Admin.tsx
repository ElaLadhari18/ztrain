// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // Interface pour les données client
// interface ClientData {
//   clientId: string;
//   name: string;
//   email: string;
//   formResponses: string[];
// }

// const Admin = () => {
//   const [clients, setClients] = useState<ClientData[]>([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await axios.get('/admin/clients', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         setClients(response.data); // response.data doit être un tableau de ClientData
//       } catch (err) {
//         console.error(err);
//         setError('Erreur lors du chargement des données clients.');
//       }
//     };

//     fetchClients();
//   }, []);

//   return (
//     <div>
//       <h2>Tableau des réponses des clients</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <table>
//         <thead>
//           <tr>
//             <th>Client ID</th>
//             <th>Nom</th>
//             <th>Email</th>
//             <th>Réponses</th>
//           </tr>
//         </thead>
//         <tbody>
//           {clients.map((client) => (
//             <tr key={client.clientId}>
//               <td>{client.clientId}</td>
//               <td>{client.name}</td>
//               <td>{client.email}</td>
//               <td>
//                 {client.formResponses.map((response, index) => (
//                   <p key={index}>{response}</p>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Admin;


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const Admin = () => {
//   const [forms, setForms] = useState([]);

//   useEffect(() => {
//     const fetchForms = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/form/all', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         });
//         setForms(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchForms();
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>User</th>
//           <th>Form Data</th>
//         </tr>
//       </thead>
//       <tbody>
//         {forms.map((form: any) => (
//           <tr key={form._id}>
//             <td>{form.userId.username}</td>
//             <td>{form.data}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Admin;


//test dernier 
// src/pages/Admin.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/api/clientProfile/all', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setProfiles(response.data);
      } catch (err) {
        console.error('Erreur de récupération des profils');
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>Profil des clients</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile._id}>
            <p>{profile.fullName}</p>
            <p>{profile.address}</p>
            <p>{profile.phoneNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
