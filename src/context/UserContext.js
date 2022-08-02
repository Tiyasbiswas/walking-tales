import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || { value: null }
  );
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || { value: 0 }
  );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user, 
        setUser,
        count,
        setCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;