import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../config/supabase";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user?.user_metadata) {
        setUser(session?.user?.user_metadata);

        setIsAuthenticated(true);
      }
    });
  }, []);

  const signOut = () => {
    supabase.auth.signOut();
    setUser({});
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ user, signOut, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
