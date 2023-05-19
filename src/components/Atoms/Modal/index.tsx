import { type ReactNode } from 'react';

import { ModalLayout, CloseModalButton, ModalWrapper } from './component';

interface ModalProps {
  children: ReactNode
  isVisible: boolean
  closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isVisible, closeModal }) => {
  if (!isVisible) return null;

  return (
    <>
      <ModalLayout onClick={closeModal} />
      <CloseModalButton onClick={closeModal} variant="ghost">
        X
      </CloseModalButton>
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </>
  );
};

export default Modal;
