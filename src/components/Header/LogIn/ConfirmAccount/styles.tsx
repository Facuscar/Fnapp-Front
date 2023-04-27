import { type ReactNode } from 'react';
import styled from 'styled-components'

import Heading from '@fnapp/components/Atoms/Heading'
import EmailIcon from '@fnapp/components/Icons/EmailIcon'
import { px2rem } from '@fnapp/utils/px2rem';

const ICON_SIZE = 60;

const StyledHeading = styled(Heading)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

export const ConfirmTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StyledHeading as="h2">{children}</StyledHeading>
)

export const ConfirmSubtitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StyledHeading as="h4">{children}</StyledHeading>
)

export const ConfirmAccountIcon = styled(EmailIcon)`
  height: ${px2rem(ICON_SIZE)};
  width: ${px2rem(ICON_SIZE)};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

export const ConfirmAccountWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.m};
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
