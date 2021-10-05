import { createContext, useState } from "react";

export const RegisterContext = createContext("");

function RegisterContextProvider({ children }) {
  const [token, setToken] = useState(false);

  const handleLogin = (val) => {
    if (val === "Profile") {
      setToken(!token);
      console.log(token);
    }
  };

  const handleLogout = (val) => {
    if (val === "Profile") {
      setToken(!token);
      console.log(token);
    }
  };

  return (
    <RegisterContext.Provider value={[token, handleLogin, handleLogout]}>
      {children}
    </RegisterContext.Provider>
  );
}

export default RegisterContextProvider;
