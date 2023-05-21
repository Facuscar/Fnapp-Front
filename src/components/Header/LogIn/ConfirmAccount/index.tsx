import { useLogIn } from '@fnapp/context/LogInProvider';

import { ConfirmAccountWrapper, ConfirmTitle, ConfirmAccountIcon, ConfirmSubtitle } from './components';

const ConfirmAccount: React.FC = () => {
  const { email, name } = useLogIn();

  return (
    <ConfirmAccountWrapper>
      <ConfirmTitle>Welcome {name}! Thank you for joining Fnapp</ConfirmTitle>
      <ConfirmAccountIcon />
      <ConfirmSubtitle>We&apos;ve sent a confirmation email to {email}, follow the instruction to confirm your account</ConfirmSubtitle>
    </ConfirmAccountWrapper>
  );
};

export default ConfirmAccount;
