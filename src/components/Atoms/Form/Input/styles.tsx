'use client';

import { px2rem } from "@fnapp/utils/px2rem";
import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.s};
  width: 100%;
`

export const InputLabel = styled.label`
  text-transform: uppercase;
`

export const Input = styled.input`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
  border: none;
  border-radius: ${px2rem(3)};
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid;
  
  &::placeholder {
    color: #3b3b3b;
  }

  &:focus {
    background-color: #f3f3f3;
    outline: none;
  }
`

//TODO: Change those grays into a theme color