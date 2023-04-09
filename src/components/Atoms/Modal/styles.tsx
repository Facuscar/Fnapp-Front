'use client';

import styled from "styled-components";

import Button from "@fnapp/components/Atoms/Button";

export const ModalLayout = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.special.black};
  opacity: 0.5;
  position: absolute;
  z-index: 2;
`

export const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.special.white};
  padding: ${({ theme }) => theme.spacing.s};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.special.black};
  z-index: 3;
`;

export const CloseModalButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.l};
  margin-right: ${({ theme }) => theme.spacing.l};
  z-index: 3;
`;