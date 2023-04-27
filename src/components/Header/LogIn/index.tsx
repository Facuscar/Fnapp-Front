'use client';

import { useState } from 'react';

import Toast from '@fnapp/components/Atoms/Toast';
import Sidebar from '@fnapp/components/Sidebar';
import { LogInProvider } from '@fnapp/context/LogInProvider';

import ConfirmAccount from './ConfirmAccount';
import EmailForm from './EmailForm';
import RegisterForm from './RegisterForm';
import LogInForm from './LogInForm';
import * as S from './styles';

export enum LoginStep {
  EMAIL = 'email',
  REGISTER = 'register',
  PASSWORD = 'password',
  CONFIRM = 'confirm',
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
            <EmailForm setError={setError} setStep={setStep} setErrorMessage={setErrorMessage} />
          )}
          {step === LoginStep.REGISTER && (
            <RegisterForm setError={setError} setErrorMessage={setErrorMessage} setStep={setStep} />
          )}
          {step === LoginStep.CONFIRM && (
            <ConfirmAccount />
          )}
          {step === LoginStep.PASSWORD && (
            <LogInForm />
          )}
        </Sidebar>
      )}
      {error && <Toast message={errorMessage} closeToast={closeToast} />}
    </LogInProvider>
  );
};

export default LogIn;
