import axios from 'axios';
import { useState, useRef, type SyntheticEvent } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';
import { LoginStep } from '@fnapp/components/Header/LogIn/component';
import { useLogIn } from '@fnapp/context/LogInProvider';
import { validatePassword } from '@fnapp/utils/validatePassword';

import * as S from './styles';

interface RegisterFormProps {
  setStep: (step: LoginStep) => void
};

interface RegisterUserResponse {
  msg: string
  success?: boolean
};

const RegisterForm: React.FC<RegisterFormProps> = ({ setStep }) => {
  const [nameError, setNameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [secondPasswordError, setSecondPasswordError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const secondPasswordRef = useRef<HTMLInputElement>(null);

  const { email, setName, setError, setErrorMessage } = useLogIn();

  const defaultError = () => {
    setError(true);
    setErrorMessage('There was an error.. please try again later');
  }

  const registerUser = () => {
    const password = passwordRef.current?.value;
    const name = nameRef.current?.value;

    if ((password === undefined) || (name === undefined)) return;

    setName(name);

    void (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.post<RegisterUserResponse>(`${process.env.NEXT_PUBLIC_API_USERS_URL}/register`, {
          email,
          name,
          password
        });
        if (data.success == null) {
          defaultError();
        }

        setStep(LoginStep.CONFIRM);
      } catch (error: any) {
        setError(true);
        if (error.response !== undefined) {
          setErrorMessage(error.response.data.msg);
          return;
        }
        console.log(error);
        defaultError();
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
    return !(nameError || passwordError || secondPasswordError);
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    registerUser();
  }

  return (
    <S.Form onSubmit={handleSubmit}>
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
        onChange={comparePasswords}
        ref={secondPasswordRef}
      />
      <S.RegisterButton
        isLoading={isLoading}
        disabled={!validateForm()}
      >
        Register
      </S.RegisterButton>
    </S.Form>
  );
};

export default RegisterForm;
