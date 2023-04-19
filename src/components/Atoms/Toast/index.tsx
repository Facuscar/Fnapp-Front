import { useEffect } from 'react';
import * as S from './styles';

const Toast: React.FC<{ message: string}> = ({ message }) => {
  
  return (
    <S.ToastWrapper>
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
