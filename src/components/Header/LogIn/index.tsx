'use client';

import LogInComponent from './component';
import { LogInProvider } from '@fnapp/context/LogInProvider';

const LogIn = () => (
  <LogInProvider>
    <LogInComponent />
  </LogInProvider>
);

export default LogIn;
