import { type ReactNode } from 'react';
import styled from 'styled-components'

import Heading from '@fnapp/components/Atoms/Heading'
import EmailIcon from '@fnapp/components/Icons/EmailIcon'
import { px2rem } from '@fnapp/utils/px2rem';

const ICON_SIZE = 40;

export const ConfirmTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Heading as="h2">{children}</Heading>
)

export const ConfirmSubtitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Heading as="h4">{children}</Heading>
)

export const ConfirmAccountIcon = styled(EmailIcon)`
  height: ${px2rem(ICON_SIZE)};
  width: ${px2rem(ICON_SIZE)};
`;
