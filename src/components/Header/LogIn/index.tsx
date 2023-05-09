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

  const openSidebar = () => {
    setIsFormVisible(true);
  };

  const closeSidebar = () => {
    setIsFormVisible(false);
  }

  return (
    <LogInProvider>
      <S.LogInButton onClick={openSidebar}>
        Log in
      </S.LogInButton>
      {isFormVisible && (
        <Sidebar closeSidebar={closeSidebar}>
          {step === LoginStep.EMAIL && (
            <EmailForm setStep={setStep} />
          )}
          {step === LoginStep.REGISTER && (
            <RegisterForm setStep={setStep} />
          )}
          {step === LoginStep.CONFIRM && (
            <ConfirmAccount />
          )}
          {step === LoginStep.PASSWORD && (
            <LogInForm />
          )}
        </Sidebar>
      )}
      <Toast />
    </LogInProvider>
  );
};

export default LogIn;
