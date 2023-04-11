import * as S from './styles';

import Logo from '@fnapp/components/Atoms/Logo';
import Input from '@fnapp/components/Atoms/Form/Input';

const LogInForm: React.FC = () => {
  return (
    <S.FormWrapper>
      <Logo />
      <S.FormTitle>
        Please enter your email address
      </S.FormTitle>
      <Input type='email' name='Email' placeholder='example@example.com' />
      <S.LogInButton>
        Continue
      </S.LogInButton>

    </S.FormWrapper>
  );
};

export default LogInForm;
