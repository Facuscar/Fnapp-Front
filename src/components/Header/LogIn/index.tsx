'use client';

import { useState } from 'react';

import Sidebar from '@fnapp/components/Sidebar';

import LogInForm from './EmailForm';
import * as S from './styles';

enum LoginStep {
  EMAIL = 'email',
  REGISTER = 'register',
  PASSWORD = 'password',
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
    <>
      <S.LogInButton onClick={openSidebar}>
        Log in
      </S.LogInButton>
      {isFormVisible && (
        <Sidebar closeSidebar={closeSidebar}>
          <LogInForm />
        </Sidebar>
      )}
    </>
  );
};

export default LogIn;