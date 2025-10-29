// import React, { useState } from 'react';
// import axios from 'axios';

// const Client = () => {
//   const [formData, setFormData] = useState({});

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       await axios.post('/forms/submit', formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert('Formulaire soumis');
//     } catch (error) {
//       console.error(error);
//       alert('Erreur lors de la soumission');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Ajoutez vos champs ici */}
//       <input
//         type="text"
//         placeholder="Champ exemple"
//         onChange={(e) => setFormData({ ...formData, example: e.target.value })}
//       />
//       <button type="submit">Soumettre</button>
//     </form>
//   );
// };

// export default Client;




// import React, { useState } from 'react';

// const Client: React.FC = () => {
//   const [formData, setFormData] = useState({ name: '', email: '' });

//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Please log in first');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/forms', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
//         body: JSON.stringify({ data: formData })
//       });

//       if (response.ok) {
//         alert('Form submitted successfully');
//       }
//     } catch (err) {
//       alert('Error submitting form');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
//         <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Client;

import React, { useState } from "react";
import axios from "../services/axiosConfig";

const ClientForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("/form/submit", formData);
      console.log("Réponse de l'API:", response.data);
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default ClientForm;
