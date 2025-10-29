// import React from 'react';
// import { Navigate } from 'react-router-dom';

// interface PrivateRouteProps {
//   children: JSX.Element;
//   requiredRole?: string;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, requiredRole }) => {
//   // Vérifier si l'utilisateur est authentifié
//   const token = localStorage.getItem('token');
//   const userRole = localStorage.getItem('role'); // Assurez-vous de stocker le rôle de l'utilisateur après la connexion

//   // Si pas de token, rediriger vers login
//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   // Si l'utilisateur n'a pas le bon rôle, rediriger
//   if (requiredRole && userRole !== requiredRole) {
//     return <Navigate to="/client" />;
//   }

//   return children;
// };

// export default PrivateRoute;
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Définir les types des propriétés attendues par PrivateRoute
interface PrivateRouteProps {
  requiredRole: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ requiredRole }) => {
  // Logique pour vérifier le rôle de l'utilisateur, cela dépend de ta gestion d'authentification
  const userRole = localStorage.getItem('userRole'); // Exemple de récupération de rôle

  if (userRole !== requiredRole) {
    // Rediriger vers une autre page si le rôle ne correspond pas
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
