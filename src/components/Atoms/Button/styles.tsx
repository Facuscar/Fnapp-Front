'use client';

import styled from "styled-components";

export const PrimaryButton: React.FC = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.m};
  color: ${({ theme }) => theme.colors.special.white};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 200ms;

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