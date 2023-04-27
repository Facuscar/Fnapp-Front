import { useLogIn } from '@fnapp/context/LogInProvider';

import * as S from './styles';

const ConfirmAccount: React.FC = () => {
  const { email, name } = useLogIn();

  return (
    <S.ConfirmAccountWrapper>
      <S.ConfirmTitle>Welcome {name}! Thank you for joining Fnapp</S.ConfirmTitle>
      <S.ConfirmAccountIcon />
      <S.ConfirmSubtitle>We&apos;ve sent a confirmation email to {email}, follow the instruction to confirm your account</S.ConfirmSubtitle>
    </S.ConfirmAccountWrapper>
  );
};

export default ConfirmAccount;
