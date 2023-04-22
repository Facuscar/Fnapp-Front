'use client';
import styled from 'styled-components';
import { lighten } from 'polished';

import { px2rem } from '@fnapp/utils/px2rem';

const ERROR_MESSAGE_HEIGHT = 16;

export const InputWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s};
  width: 100%;
`

export const InputLabel = styled.label`
  text-transform: uppercase;
`

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme, hasError }) => !(hasError ?? false) ? px2rem(ERROR_MESSAGE_HEIGHT + 8) : theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
  border: none;
  border-radius: ${px2rem(3)};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 2px solid ${({ theme, hasError }) => (hasError ?? false) ? theme.colors.special.red : ''};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.l};
  }

  &:focus {
    background-color: ${({ theme }) => lighten(0.35, theme.colors.gray.xs)};
    outline: none;
  }
`
export const ErrorMessage = styled.p`
  color: ${({ theme }) => lighten(0.1, theme.colors.special.red)};
  height: ${px2rem(ERROR_MESSAGE_HEIGHT)};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${px2rem(14)};
`;
