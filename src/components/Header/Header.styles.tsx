'use client';

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
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
  color: ${({ theme }) => theme.colors.primary.m};
`

export const Name: React.FC<{ children: string }> = ({children}) => (
  <StyledHeading as="h1">{children}</StyledHeading>
);

const StyledWrapper = styled(Link)`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing.s};
  padding: ${({ theme }) => theme.spacing.s};
  text-decoration: none;
`

export const LogoWrapper: React.FC<LinkProps & { children: ReactNode }> = ({ children, href }) => (
  <StyledWrapper href={href}>{children}</StyledWrapper>
);