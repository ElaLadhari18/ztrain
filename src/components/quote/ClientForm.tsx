// Assure-toi que ces imports existent déjà dans ton fichier
import React, { useState } from 'react';
import axios from 'axios';

const ClientForm = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fonction qui gère la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Récupère le token d'authentification depuis localStorage
    const token = localStorage.getItem('token');

    // Vérifie si le token est disponible
    if (!token) {
      setError('Vous devez être connecté pour soumettre ce formulaire');
      return;
    }

    try {
      // Envoie la requête POST avec le token dans l'en-tête Authorization
      const response = await axios.post(
        'http://localhost:5000/api/form/submit', // Assure-toi que cette URL est correcte
        { fullName, address, phoneNumber }, // Données à envoyer
        {
          headers: {
            Authorization: `Bearer ${token}` // En-tête contenant le token JWT
          }
        }
      );

      // Si la soumission est réussie, vide les champs du formulaire
      setSuccess('Profil créé avec succès');
      setFullName('');
      setAddress('');
      setPhoneNumber('');
    } catch (err) {
      // Si erreur, affiche le message d'erreur
      setError('Erreur lors de la soumission du formulaire');
      console.error(err); // Affiche l'erreur pour aider au débogage
    }
  };

  return (
    <div>
      <h2>Formulaire Client</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom complet</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Adresse</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Numéro de téléphone</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default ClientForm;
