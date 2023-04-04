'use client';

import { ReactNode } from "react";
import styled from "styled-components";

import Heading from "@fnapp/components/Atoms/Heading";
import { px2rem } from "@fnapp/utils/px2rem";

const HEADER_HEIGHT = px2rem(70);

const StyledHeader = styled.header`
  height: ${HEADER_HEIGHT};
`;

export const HeaderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
)

const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.primary.s};
`

export const Name: React.FC<{ children: string }> = ({children}) => (
  <StyledHeading as="h1">{children}</StyledHeading>
);