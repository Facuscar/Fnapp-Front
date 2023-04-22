import styled from 'styled-components';

import Heading from '@fnapp/components/Atoms/Heading';
import Button from '@fnapp/components/Atoms/Button';
import { px2rem } from '@fnapp/utils/px2rem';

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin-top: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.s};
`

export const FormTitle: React.FC<{ children: string }> = ({ children }) => (
  <StyledHeading as="h4">{children}</StyledHeading>
);

export const LogInButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};
  font-size: ${px2rem(14)};
  width: 100%;
`;
