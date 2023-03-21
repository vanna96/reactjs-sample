import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('authUser'));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('authUser', JSON.stringify(user));
        setCurrentUser(user);
      } else {
        localStorage.removeItem('authUser');
        setCurrentUser(null);
      }
    });
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};