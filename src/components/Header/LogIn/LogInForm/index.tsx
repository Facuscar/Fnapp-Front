import axios from 'axios';
import Cookies from 'js-cookie';
import { useState, useRef, type FormEvent } from 'react';

import Alert from '@fnapp/components/Atoms/Alert';
import Input from '@fnapp/components/Atoms/Form/Input';
import { useLogIn } from '@fnapp/context/LogInProvider';

import { FormTitle, Form, LogInButton, ForgotPasswordButton } from './components';

interface LoginResponse {
  token: string
  _id: string
  name: string
  email: string
};

interface ForgotPasswordResponse {
  msg: string
};

const LogInForm: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const { name, email, setError, setErrorMessage } = useLogIn();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordRef.current === null) return;

    const password = passwordRef.current.value;
    void (async () => {
      try {
        const { data } = await axios.post<LoginResponse>(`${process.env.NEXT_PUBLIC_API_USERS_URL}/login`, { email, password });

        const { token } = data;

        Cookies.set('authToken', token, { expires: 7 })
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

  const forgotPassword = () => {
    void (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.post<ForgotPasswordResponse>(`${process.env.NEXT_PUBLIC_API_USERS_URL}/forgot-password`, { email });

        setForgotPasswordMessage(data.msg);
      } catch (error: any) {
        if (error.response !== undefined) {
          setForgotPasswordMessage(error.response.data.msg);
          return;
        }

        setForgotPasswordMessage('Oops.. there was an error.');
      } finally {
        setIsLoading(false);
      }
    })();
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
      <ForgotPasswordButton onClick={forgotPassword} isLoading={isLoading}>
        I forgot my password
      </ForgotPasswordButton>
      {forgotPasswordMessage !== undefined && <Alert msg={forgotPasswordMessage} />}
    </>
  )
}

export default LogInForm;
