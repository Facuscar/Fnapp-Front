import { ReactNode } from "react";

import * as S from './styles';

type ModalProps = {
  children: ReactNode;
  isVisible: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isVisible, closeModal }) => {
  if (!isVisible) return null;

  return (
    <>
      <S.ModalLayout />
      <S.ModalWrapper>
        {children}
      </S.ModalWrapper>
    </>
  );
};

export default Modal;