import styled from "styled-components";

import { HEADER_HEIGHT } from "@fnapp/components/Header/Header.styles";
import Alert from '@fnapp/components/Icons/AlertIcon';
import { px2rem } from "@fnapp/utils/px2rem";
import Button from "@fnapp/components/Atoms/Button";

const TOAST_MIN_WIDTH = 300;

export const ToastWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.special.red};
  border-radius: ${px2rem(5)};
  position: absolute;
  top: ${HEADER_HEIGHT};
  right: 0;
  min-width: ${px2rem(TOAST_MIN_WIDTH)};
  padding: ${({ theme }) => theme.spacing.s};
  padding-top: ${({ theme }) => theme.spacing.xs};
  margin-right: ${({ theme }) => theme.spacing.s};
  z-index: 10;

  animation: showToast 300ms;
  @keyframes showToast {
    0% {
      transform: translateX(${px2rem(TOAST_MIN_WIDTH)});
    }
    100% {
      transform: translateX(${px2rem(0)});
    }
  }
`;

export const CloseButton = styled(Button)`
  margin: 0 0 0 auto;
  background-color: transparent;
  display: block;
  padding: 0;

  &:hover {
    background-color: transparent;
  }
`;

export const ToastText = styled.p`
  text-align: left;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const ToastAlert = styled(Alert)`
  width: ${px2rem(40)};
  height: ${px2rem(40)};
`