import * as S from './styles';

const Alert: React.FC<{ message: string, error: boolean }> = ({ message, error }) => {
  return (
    <S.AlertWrapper>
      Alert content
    </S.AlertWrapper>
  );
};

export default Alert;
