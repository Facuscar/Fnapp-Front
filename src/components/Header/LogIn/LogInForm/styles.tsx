import styled from "styled-components";

import Heading from "@fnapp/components/Atoms/Heading";
import Button from "@fnapp/components/Atoms/Button";
import { px2rem } from "@fnapp/utils/px2rem";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 0 ${({ theme }) => theme.spacing.s};
`;

const StyledHeading = styled(Heading)`
  margin-top: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.s};
`

export const FormTitle: React.FC<{ children: string }> = ({children}) => (
  <StyledHeading as="h4">{children}</StyledHeading>
);

export const LogInButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};
  font-size: ${px2rem(14)};
  width: 100%;
`;