import { useEffect, useState } from 'react';

import { useLogIn } from '@fnapp/context/LogInProvider';

import * as S from './styles';

const Toast: React.FC = () => {
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const { setError, errorMessage } = useLogIn();

  const hideToast = () => {
    setIsClosing(true);
    setTimeout(() => {
      setError(false);
    }, 350);
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
        {errorMessage}
      </S.ToastText>
      <S.TimeBar isClosing={isClosing} />
    </S.ToastWrapper>
  );
};

export default Toast;
