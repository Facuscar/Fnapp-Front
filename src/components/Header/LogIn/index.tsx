'use client';

import { useState } from 'react';

import Toast from '@fnapp/components/Atoms/Toast';
import Sidebar from '@fnapp/components/Sidebar';
import { LogInProvider } from '@fnapp/context/LogInProvider';

import LogInForm from './EmailForm';
import * as S from './styles';
import RegisterForm from './RegisterForm';

export enum LoginStep {
  EMAIL = 'email',
  REGISTER = 'register',
  PASSWORD = 'password',
};

const LogIn: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [step, setStep] = useState<LoginStep>(LoginStep.EMAIL);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const openSidebar = () => {
    setIsFormVisible(true);
  };

  const closeSidebar = () => {
    setIsFormVisible(false);
  }

  const closeToast = () => {
    setError(false);
  }

  return (
    <LogInProvider>
      <S.LogInButton onClick={openSidebar}>
        Log in
      </S.LogInButton>
      {isFormVisible && (
        <Sidebar closeSidebar={closeSidebar}>
          {step === LoginStep.EMAIL && (
            <LogInForm setError={setError} setStep={setStep} setErrorMessage={setErrorMessage} />
          )}
          {step === LoginStep.REGISTER && (
            <RegisterForm setError={setError} setErrorMessage={setErrorMessage} />
          )}
        </Sidebar>
      )}
      {error && <Toast message={errorMessage} closeToast={closeToast} />}
    </LogInProvider>
  );
};

export default LogIn;
