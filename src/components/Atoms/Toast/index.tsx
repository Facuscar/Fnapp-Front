import { useEffect, useState } from 'react';
import * as S from './styles';

type ToastProps = {
  message: string;
  closeToast: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, closeToast }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const hideToast = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeToast();
    }, 250);
  };

  useEffect(() => {
    const toastTimeout = setTimeout(hideToast, 10000);

    return () => {
      clearTimeout(toastTimeout);
    };
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
