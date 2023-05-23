import styled from 'styled-components';

import Button from '@fnapp/components/Atoms/Button';

import { px2rem } from '@fnapp/utils/px2rem';

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RegisterButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.s};
  font-size: ${px2rem(14)};
  width: 100%;
`;
