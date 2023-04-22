import Input from '@fnapp/components/Atoms/Form/Input';

import * as S from './styles';

interface RegisterFormProps {
  email: string
}

const RegisterForm: React.FC<RegisterFormProps> = ({ email }) => {
  return (
    <S.Form>
      <Input type='email' defaultValue={email} name='Email' disabled />
      <Input type='text' name='Name' placeholder='Your name' />
      <Input type='password' name='Password' />
      <Input type='password' name='Confirm your password' />
      <S.RegisterButton>
        Register
      </S.RegisterButton>
    </S.Form>
  );
};

export default RegisterForm;
