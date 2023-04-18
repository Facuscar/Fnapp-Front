import { RefObject, SyntheticEvent, useRef } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';

import * as S from './styles';

type LogInFormProps = {
  submitEmail: (e: SyntheticEvent, emailRef: RefObject<HTMLInputElement>) => void;
  isEmailValid: boolean;
  isLoading: boolean;
}

const LogInForm: React.FC<LogInFormProps> = ({ submitEmail, isEmailValid, isLoading }) => {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <S.Form onSubmit={(e) => submitEmail(e, emailRef)}>
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
