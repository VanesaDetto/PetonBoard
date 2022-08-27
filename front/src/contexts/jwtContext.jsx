import { useState, createContext } from "react";

export const JwtContext = createContext();

export const JwtContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem("token");
    return savedJwt || null;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("petuser");
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  const [editingPetuser, setEditingPetuser] = useState({});

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem("petuser");
    localStorage.removeItem("token");
  };

  return (
    <JwtContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        logout,
        editingPetuser,
        setEditingPetuser,
      }}
    >
      {children}
    </JwtContext.Provider>
  );
};
