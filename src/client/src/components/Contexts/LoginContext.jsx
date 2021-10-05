import { createContext, useState } from "react";

export const LoginContext1 = createContext("");

function LoginContextProvider({ children }) {
  const [loginToken, setToken] = useState(false);

  const handleToken = () => {
    setToken(!loginToken);
  };

  return (
    <LoginContext1.Provider value={[loginToken, handleToken]}>
      {children}
    </LoginContext1.Provider>
  );
}

export default LoginContextProvider;
