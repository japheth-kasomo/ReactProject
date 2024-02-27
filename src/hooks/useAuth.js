
import { useState } from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState(null);

  const login = (userData) => {
    // Your login logic here
    setAuth(userData);
  };

  const logout = () => {
    // Your logout logic here
    setAuth(null);
  };

  return { auth, login, logout, setAuth }; // Include setAuth in the returned object
};

export default useAuth;

// import { useContext } from "react";
// import AuthContext from "../contexts/AuthContext";

// const useAuth = () => {
//   return useContext(AuthContext);
// };

// export default useAuth;
// import { useState } from 'react';

// const useAuth = () => {
//   const [auth, setAuth] = useState(null);

//   return { auth, setAuth };
// };

// export default useAuth;