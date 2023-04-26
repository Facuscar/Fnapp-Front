import { type ReactNode, createContext, useContext, useState } from 'react';

interface Context {
  email: string
  setEmail: (email: string) => void
  name: string
  setName: (name: string) => void
}

const LogInContext = createContext<Context | null>(null);

export const LogInProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  return (
    <LogInContext.Provider value={{ email, setEmail, name, setName }}
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
