import styled from 'styled-components';

import { HEADER_HEIGHT } from '@fnapp/components/Header/Header.styles';
import Alert from '@fnapp/components/Icons/AlertIcon';
import { px2rem } from '@fnapp/utils/px2rem';
import Button from '@fnapp/components/Atoms/Button';
import { darken } from 'polished';

const TOAST_WIDTH = 450;
const ICON_SIZE = 40;

export const ToastWrapper = styled.div<{ isClosing: boolean }>`
  background-color: ${({ theme }) => theme.colors.special.red};
  border-radius: ${px2rem(8)};
  position: absolute;
  top: ${HEADER_HEIGHT};
  right: 0;
  width: ${px2rem(TOAST_WIDTH)};
  padding: ${({ theme }) => `${theme.spacing.halfL} ${theme.spacing.s}`};
  padding-top: ${({ theme }) => theme.spacing.xs};
  margin-right: ${({ theme }) => theme.spacing.s};
  z-index: 10;
  overflow: hidden;

  animation: ${({ isClosing }) => isClosing ? 'hideToast' : 'showToast'} 400ms  cubic-bezier(0.42, 0, 0.58, 1);
  @keyframes showToast {
    0% {
      transform: translateX(${px2rem(TOAST_WIDTH)});
    }

    50% {
      transform: translateX(${px2rem(-32)});
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes hideToast {
    0% {
      transform: translateX(${px2rem(0)});
    }

    25% {
      transform: translateX(${px2rem(-32)});
    }

    100% {
      transform: translateX(${px2rem(500)});
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
  width: ${px2rem(ICON_SIZE)};
  height: ${px2rem(ICON_SIZE)};
`;

export const TimeBar = styled.div<{ isClosing: boolean }>`
  animation: timeBar 10000ms;
  background-color: ${({ theme }) => darken(0.25, theme.colors.special.red)};
  bottom: 0;
  height: 5px;
  position: absolute;
  right: 0;
  ${({ isClosing }) => isClosing ? 'display: none' : 'width: 100%'};

  @keyframes timeBar {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(${px2rem(TOAST_WIDTH)});
    }
  }
`
