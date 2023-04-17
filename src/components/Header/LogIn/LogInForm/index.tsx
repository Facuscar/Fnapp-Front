import axios from 'axios';
import { SyntheticEvent, useRef, useState } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';
import { validateEmail } from '@fnapp/utils/validateEmail';

import * as S from './styles';

const LogInForm: React.FC = () => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value;

    if (!email || !validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsLoading(true);
    setIsEmailValid(true);
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_USERS_URL}`, { email });
    setIsLoading(false);
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>
        Please enter your email address
      </S.FormTitle>
      <Input 
        type='email' 
        name='Email' 
        placeholder='example@example.com' 
        ref={emailRef} 
        hasError={!isEmailValid} 
        errorMessage='Email is not valid'
      />
      <S.LogInButton isLoading={isLoading} type='submit'>
        Continue
      </S.LogInButton>
    </S.Form>
  );
};

export default LogInForm;
