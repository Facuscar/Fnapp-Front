'use client';

import axios from 'axios';
import { SyntheticEvent, useState, RefObject } from 'react';

import Sidebar from '@fnapp/components/Sidebar';
import { validateEmail } from '@fnapp/utils/validateEmail';

import LogInForm from './EmailForm';
import * as S from './styles';

enum LoginStep {
  EMAIL = 'email',
  REGISTER = 'register',
  PASSWORD = 'password',
};

type SubmitEmailResponse = {
  msg: string,
  user?: {
    name: string,
    email: string,
  },
};

const LogIn: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [step, setStep] = useState<LoginStep>(LoginStep.EMAIL);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const submitEmail = async (e: SyntheticEvent, emailRef: RefObject<HTMLInputElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;

    if (!email || !validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    setIsLoading(true);
    setIsEmailValid(true);

    try {
      const { data } = await axios.post<SubmitEmailResponse>(`${process.env.NEXT_PUBLIC_API_USERS_URL}`, { email });
      if (!data.user) setStep(LoginStep.REGISTER);
      else setStep(LoginStep.PASSWORD);
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data.msg);
        return;
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    
  }

  const openSidebar = () => {
    setIsFormVisible(true);
  };

  const closeSidebar = () => {
    setIsFormVisible(false);
  }

  return (
    <>
      <S.LogInButton onClick={openSidebar}>
        Log in
      </S.LogInButton>
      {isFormVisible && (
        <Sidebar closeSidebar={closeSidebar}>
          {step === LoginStep.EMAIL && ( 
            <LogInForm 
              submitEmail={submitEmail} 
              isLoading={isLoading} 
              isEmailValid={isEmailValid} 
            />
          )}
        </Sidebar>
      )}
    </>
  );
};

export default LogIn;