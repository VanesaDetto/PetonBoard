import { useState, createContext } from "react";

export const JwtContext = createContext();
export const JwtContextrovider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem("token");
    return savedJwt || null;
  });

  const [user, setUser] = useState(() => {
    const saveUser = localStorage.getItem("user");
    const initialValue = JSON.parse(saveUser);
    return initialValue || null;
  });

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStronge.removeItem("user");
    localStronge.removeItem("token");
  };

  return (
    <JwtContext.Provider value={(jwt, setJwt, user, setUser, logout)}>
      {children}
    </JwtContext.Provider>
  );
};
