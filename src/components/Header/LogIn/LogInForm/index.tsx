import * as S from './styles';

import Logo from '@fnapp/components/Atoms/Logo';
import Input from '@fnapp/components/Atoms/Form/Input';
import { useState } from 'react';

const LogInForm: React.FC = () => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return (
    <S.FormWrapper>
      <Logo />
      <S.FormTitle>
        Please enter your email address
      </S.FormTitle>
      <Input type='email' name='Email' placeholder='example@example.com' />
      <S.LogInButton isLoading={isLoading} onClick={handleClick}>
        Continue
      </S.LogInButton>

    </S.FormWrapper>
  );
};

export default LogInForm;
