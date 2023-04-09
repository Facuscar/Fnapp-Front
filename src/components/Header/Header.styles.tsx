'use client';

import { HTMLAttributes, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

import Button from "@fnapp/components/Atoms/Button";
import Heading from "@fnapp/components/Atoms/Heading";
import User from "@fnapp/components/Atoms/UserIcon";
import { px2rem } from "@fnapp/utils/px2rem";

const HEADER_HEIGHT = px2rem(70);
const USER_HEIGHT= px2rem(25);

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.m};
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

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.l};

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