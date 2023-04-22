import { type HTMLAttributes } from 'react';
import styled from 'styled-components';

import Button from '@fnapp/components/Atoms/Button';
import User from '@fnapp/components/Icons/UserIcon';
import { px2rem } from '@fnapp/utils/px2rem';

const USER_HEIGHT = px2rem(25);

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;

  & svg {
    height: ${USER_HEIGHT};
    margin-right: ${px2rem(10)};
    margin-bottom: ${px2rem(2)};
  }
`;

export const LogInButton: React.FC<HTMLAttributes<HTMLButtonElement> & { children: string }> = ({ children, ...props }) => (
  <StyledButton {...props}>
    <User />
    {children}
  </StyledButton>
);
