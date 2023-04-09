'use client';

import { useState } from 'react';

import Modal from '@fnapp/components/Atoms/Modal';

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
        <h1>Test modal</h1>
      </Modal>
    </>
  );
};

export default LogIn;