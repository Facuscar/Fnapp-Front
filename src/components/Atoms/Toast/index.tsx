import * as S from './styles';

const Alert: React.FC<{ message: string}> = ({ message }) => {
  return (
    <S.ToastWrapper>
      <S.ToastText>
        {message}
      </S.ToastText>
    </S.ToastWrapper>
  );
};

export default Alert;
