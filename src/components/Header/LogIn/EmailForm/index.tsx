import axios from 'axios';
import { type RefObject, type SyntheticEvent, useRef, useState } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';
import { LoginStep } from '@fnapp/components/Header/LogIn/component';
import { useLogIn } from '@fnapp/context/LogInProvider';
import { validateEmail } from '@fnapp/utils/validateEmail';

import * as S from './components';

interface SubmitEmailResponse {
  msg: string
  user?: {
    name: string
    email: string
  }
};

interface EmailFormProps {
  setStep: (step: LoginStep) => void
};

const EmailForm: React.FC<EmailFormProps> = ({ setStep }) => {
  const emailRef = useRef<HTMLInputElement>(null);

  const { setEmail, setName, setError, setErrorMessage } = useLogIn();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const submitEmail = (e: SyntheticEvent, emailRef: RefObject<HTMLInputElement>) => {
    e.preventDefault();
    const submittedEmail = emailRef.current?.value;

    if ((submittedEmail == null) || !validateEmail(submittedEmail)) {
      setIsEmailValid(false);
      return;
    }

    setIsLoading(true);
    setIsEmailValid(true);
    setEmail(submittedEmail);

    void (async () => {
      try {
        const { data } = await axios.post<SubmitEmailResponse>(`${process.env.NEXT_PUBLIC_API_USERS_URL}`, {
          email:
          submittedEmail
        });
        if (data.user == null) {
          setStep(LoginStep.REGISTER);
        } else {
          setStep(LoginStep.PASSWORD);
          setName(data.user.name);
        }
      } catch (error: any) {
        setError(true);
        if (error.response !== undefined) {
          setErrorMessage(error.response.data.msg);
          return;
        }
        setErrorMessage('Oops.. there was an error, please try again later');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }

  return (
    <S.Form onSubmit={(e) => { submitEmail(e, emailRef) }}>
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

export default EmailForm;
