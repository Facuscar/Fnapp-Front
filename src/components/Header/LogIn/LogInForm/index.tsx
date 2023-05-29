import axios from 'axios';
import { useState, useRef, type FormEvent } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';
import { useLogIn } from '@fnapp/context/LogInProvider';

import { FormTitle, Form, LogInButton, ForgotPasswordButton } from './components';

interface LoginResponse {
  token: string
  _id: string
  name: string
  email: string
}

const LogInForm: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const { name, email, setError, setErrorMessage } = useLogIn();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current === null) return;

    const password = passwordRef.current.value;
    void (async () => {
      try {
        const { data } = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_API_USERS_URL}/login`, { email, password });
      } catch (error: any) {
        if (error.response !== undefined) {
          setError(true);
          setErrorMessage(error.response.data.msg)
        }
      }
    })();
  }

  const validatePasswordInput = (e: FormEvent<HTMLInputElement>) => {
    setCanSubmit(e.currentTarget.value.length > 0);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormTitle>
          {`Hi ${name}! Please enter your password`}
        </FormTitle>
        <Input type='email' defaultValue={email} name='Email' disabled />
        <Input
          type='password'
          name='Password'
          onChange={validatePasswordInput}
          ref={passwordRef}
        />
        <LogInButton disabled={!canSubmit}>
          Log in
        </LogInButton>
      </Form>
      <ForgotPasswordButton>
        I forgot my password
      </ForgotPasswordButton>
    </>
  )
}

export default LogInForm;
