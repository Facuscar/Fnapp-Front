'use client';

import { useState } from 'react';

import Modal from '@fnapp/components/Atoms/Modal';

import LogInForm from './LogInForm';
import * as S from './styles';

const LogIn: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openModal = () => {
    setIsFormVisible(true);
  };

  const closeModal = () => {
    setIsFormVisible(false);
  }

  return (
    <>
      <S.LogInButton onClick={openModal}>
        Log in
      </S.LogInButton>
      <Modal isVisible={isFormVisible} closeModal={closeModal}>
        <LogInForm />
      </Modal>
    </>
  );
};

export default LogIn;