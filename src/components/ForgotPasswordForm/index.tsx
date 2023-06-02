'use client';

import { useRef } from 'react';

import Input from '@fnapp/components/Atoms/Form/Input';

import { Form, Title, Wrapper } from './components';

const ForgotPasswordForm: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)

  return (
    <Wrapper>
      <Title>
        Recover your password
      </Title>
      <Form>
        <Input name='New password' type='password' ref={passwordRef} autoComplete='new-password' />
        <Input name='Repeat your password' type='password' ref={secondPasswordRef} />
      </Form>
    </Wrapper>
  );
};

export default ForgotPasswordForm;
