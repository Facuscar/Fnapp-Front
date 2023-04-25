import { useState, useRef } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';
import { validatePassword } from '@fnapp/utils/validatePassword';

import * as S from './styles';

interface RegisterFormProps {
  email: string
}

const RegisterForm: React.FC<RegisterFormProps> = ({ email }) => {
  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [secondPasswordError, setSecondPasswordError] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const validatePasswordInput = (password: string) => {
    setPasswordError(!validatePassword(password));
  }

  const comparePasswords = (secondPassword: string) => {
    if (secondPassword !== passwordRef.current?.value) {
      setSecondPasswordError(true);
      return;
    }

    setSecondPasswordError(false);
  };

  return (
    <S.Form>
      <Input type='email' defaultValue={email} name='Email' disabled />
      <Input
        type='text'
        name='Name'
        placeholder='Your name'
        ref={nameRef} hasError={nameError}
        errorMessage='This field cannot be empty'
        onChange={e => { setNameError(e.currentTarget.value.length === 0) }}
      />
      <Input
        type='password'
        name='Password'
        onChange={e => { validatePasswordInput(e.currentTarget.value) }}
        errorMessage='At least one number, one letter, and one special character'
        hasError={passwordError}
        ref={passwordRef}
      />
      <Input
        type='password'
        name='Confirm your password'
        hasError={secondPasswordError}
        errorMessage='Passwords do not match'
        onChange={e => { comparePasswords(e.currentTarget.value) }}
      />
      <S.RegisterButton
        disabled={nameError || passwordError || secondPasswordError}
      >
        Register
      </S.RegisterButton>
    </S.Form>
  );
};

export default RegisterForm;
