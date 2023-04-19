import { useEffect, useState } from 'react';
import * as S from './styles';

type ToastProps = {
  message: string;
  closeToast: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, closeToast }) => {
  //TODO Fix: setTimeout keeps running after toast is closed
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const hideToast = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeToast();
    }, 250);
  };

  useEffect(() => {
    setTimeout(hideToast, 10000);
  }, []);

  return (
    <S.ToastWrapper isClosing={isClosing} onClick={hideToast}>
      <S.CloseButton>
        x
      </S.CloseButton>
      <S.ToastText>
        <S.ToastAlert />
        {message}
      </S.ToastText>
    </S.ToastWrapper>
  );
};

export default Toast;
