'use client';

import styled from "styled-components";

export const ModalLayout = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.special.white};
  opacity: 0.15;
  position: absolute;
  z-index: 2;
`

export const ModalWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.special.white};
  padding: ${({ theme }) => theme.spacing.s};
`;