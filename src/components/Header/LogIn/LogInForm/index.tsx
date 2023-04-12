import { RefObject, SyntheticEvent, useRef, useState } from 'react';

import Logo from '@fnapp/components/Atoms/Logo';
import Input from '@fnapp/components/Atoms/Form/Input';
import { validateEmail } from '@fnapp/utils/validateEmail';

import * as S from './styles';

const LogInForm: React.FC = () => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);

  console.log(isEmailValid);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;

    if (!email || !validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <Logo />
      <S.FormTitle>
        Please enter your email address
      </S.FormTitle>
      <Input type='email' name='Email' placeholder='example@example.com' ref={emailRef}/>
      <S.LogInButton isLoading={isLoading} type='submit'>
        Continue
      </S.LogInButton>

    </S.Form>
  );
};

export default LogInForm;
