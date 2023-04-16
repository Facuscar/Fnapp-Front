'use client';

import { useState } from 'react';

import Sidebar from '@fnapp/components/Sidebar';

import LogInForm from './LogInForm';
import * as S from './styles';

const LogIn: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

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