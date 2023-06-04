'use client';

import axios from 'axios';
import { useRef, useState, type SyntheticEvent } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';
import { validatePassword } from '@fnapp/utils/validatePassword';

import { Form, Title, Wrapper, SubmitButton } from './components';

const ForgotPasswordForm: React.FC<{ token: string }> = ({ token }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [secondPasswordError, setSecondPasswordError] = useState<boolean>(false);

  const passwordRef = useRef<HTMLInputElement>(null);
  const secondPasswordRef = useRef<HTMLInputElement>(null);

  const updatePassword = () => {
    const password = passwordRef.current?.value;

    if (password === undefined) return;
    void (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_USERS_URL}/forgot-password/${token}`, { password });
        console.log(data);
      } catch (error) {
        console.log(error.response);
      } finally {
        setIsLoading(false);
      }
    })();
  }

  const validatePasswordInput = (password: string) => {
    setPasswordError(!validatePassword(password));
    if ((secondPasswordRef.current?.value) !== '') {
      comparePasswords()
    }
  }

  const comparePasswords = () => {
    if (secondPasswordRef.current?.value !== passwordRef.current?.value) {
      setSecondPasswordError(true);
      return;
    }

    setSecondPasswordError(false);
  };

  const validateForm = () => {
    return !(passwordError || secondPasswordError);
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    updatePassword();
  }

  return (
    <Wrapper>
      <Title>
        Recover your password
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name='New password'
          type='password'
          ref={passwordRef}
          autoComplete='new-password'
          onChange={e => { validatePasswordInput(e.currentTarget.value) }}
          hasError={passwordError}
          errorMessage='At least one number, one letter, and one special character'
        />
        <Input
          name='Repeat your password'
          type='password'
          ref={secondPasswordRef}
          onChange={comparePasswords}
          hasError={secondPasswordError}
          errorMessage='Passwords do not match'
        />
        <SubmitButton isLoading={isLoading}>Reset password</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default ForgotPasswordForm;
