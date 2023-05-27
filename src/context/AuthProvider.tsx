import axios from 'axios';
import { useState, useEffect, createContext, useContext, type ReactNode } from 'react';

import { getConfig } from '@fnapp/utils/getConfig';

interface User {
  email: string
  name: string
  _id: string
};

interface Context {
  setAuth: (auth: User) => void
  auth: User | null
  loading: boolean
  logOut: () => void
};

const AuthContext = createContext<Context | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    void (async () => {
      const token = localStorage.getItem('token');

      if (token === null) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios<User>(`${process.env.NEXT_PUBLIC_API_USERS_URL}/profile`, getConfig(token));
        setAuth(data);
      } catch (error) {
        setAuth(null);
      } finally {
        setLoading(false)
      }
    })();
  }, []);

  const logOut = () => {
    setAuth(null);
  }

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,
      loading,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error('[AuthContext] Missing context');
  }

  return context;
};
