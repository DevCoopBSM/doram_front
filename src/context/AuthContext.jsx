import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

// ... existing imports ...

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // userName 상태 추가

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    userName,
    setUserName
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 