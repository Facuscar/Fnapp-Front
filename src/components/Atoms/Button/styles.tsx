'use client';

import styled from "styled-components";

import { px2rem } from "@fnapp/utils/px2rem";

export const PrimaryButton: React.FC = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.m};
  color: ${({ theme }) => theme.colors.special.white};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${px2rem(3)};
  border: none;
  cursor: pointer;
  transition: background-color 200ms;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.l};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.l};
  }
`;

export const GhostButton: React.FC = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.m};
  padding: ${({ theme }) => theme.spacing.xs};
  border: 2px solid ${({ theme }) => theme.colors.primary.m};
  cursor: pointer;
`