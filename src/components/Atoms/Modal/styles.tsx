'use client';

import styled from "styled-components";

import Button from "@fnapp/components/Atoms/Button";
import { px2rem } from "@fnapp/utils/px2rem";

export const ModalLayout = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.special.black};
  opacity: 0.65;
  position: absolute;
  z-index: 2;
`

export const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.special.white};
  border-radius: ${px2rem(5)};
  padding: ${({ theme }) => theme.spacing.s};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.special.black};
  z-index: 3;

  animation: fadeIn 300ms;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const CloseModalButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.l};
  margin-right: ${({ theme }) => theme.spacing.l};
  z-index: 3;
  font-weight: ${({ theme }) => theme.fontWeight.l};
  font-size: ${px2rem(20)};
`;