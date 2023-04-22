import Input from '@fnapp/components/Atoms/Form/Input';

import { validatePassword } from '@fnapp/utils/validatePassword';

import * as S from './styles';
import { useState } from 'react';

interface RegisterFormProps {
  email: string
}

const RegisterForm: React.FC<RegisterFormProps> = ({ email }) => {
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const validatePasswordInput = (password: string) => {
    setPasswordError(!validatePassword(password));
  }

  return (
    <S.Form>
      <Input type='email' defaultValue={email} name='Email' disabled />
      <Input type='text' name='Name' placeholder='Your name' />
      <Input
        type='password'
        name='Password'
        onChange={e => { validatePasswordInput(e.currentTarget.value) }}
        errorMessage='At least one number, one letter, and one special character'
        hasError={passwordError}
      />
      <Input type='password' name='Confirm your password' />
      <S.RegisterButton>
        Register
      </S.RegisterButton>
    </S.Form>
  );
};

export default RegisterForm;
