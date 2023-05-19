import { useEffect, useState } from 'react';

import { useLogIn } from '@fnapp/context/LogInProvider';

import { ToastWrapper, CloseButton, ToastText, ToastAlert, TimeBar } from './components';

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
    <ToastWrapper isClosing={isClosing} onClick={hideToast}>
      <CloseButton>
        x
      </CloseButton>
      <ToastText>
        <ToastAlert />
        {errorMessage}
      </ToastText>
      <TimeBar isClosing={isClosing} />
    </ToastWrapper>
  );
};

export default Toast;
