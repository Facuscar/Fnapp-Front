import { useState, useRef, type FormEvent } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';
import { useLogIn } from '@fnapp/context/LogInProvider';

import * as S from './styles';

const LogInForm: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const { name, email } = useLogIn();

  const validatePasswordInput = (e: FormEvent<HTMLInputElement>) => {
    setCanSubmit(e.currentTarget.value.length > 0);
  }

  return (
    <S.Form>
      <S.FormTitle>
        {`Hi ${name}! Please enter your password`}
      </S.FormTitle>
      <Input type='email' defaultValue={email} name='Email' disabled />
      <Input
        type='password'
        name='Password'
        onChange={validatePasswordInput}
        ref={passwordRef}
      />
      <S.LogInButton disabled={!canSubmit}>
        Log in
      </S.LogInButton>
    </S.Form>
  )
}

export default LogInForm;
