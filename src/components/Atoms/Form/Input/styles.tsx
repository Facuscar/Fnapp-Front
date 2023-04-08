'use client';

import { px2rem } from "@fnapp/utils/px2rem";
import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s};
`

export const InputLabel = styled.label`
  text-transform: uppercase;
`

export const Input = styled.input`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${px2rem(5)};
`