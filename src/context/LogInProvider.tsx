import { type ReactNode, createContext, useContext, useState } from 'react';

interface Context {
  email: string
  setEmail: (email: string) => void
}

const LogInContext = createContext<Context | null>(null);

export const LogInProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>('');

  return (
    <LogInContext.Provider value={{ email, setEmail }}
    >
      {children}
    </LogInContext.Provider>
  )
}

export default LogInContext;

export const useLogIn = () => {
  const context = useContext(LogInContext);

  if (context === null) {
    throw new Error('[AuthContext] Missing context')
  }

  return context;
};
