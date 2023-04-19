import styled from "styled-components";
import { lighten } from "polished";

import { HEADER_HEIGHT } from "@fnapp/components/Header/Header.styles";
import { px2rem } from "@fnapp/utils/px2rem";

const TOAST_MIN_WIDTH = 300;

export const ToastWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.special.red};
  position: absolute;
  top: ${HEADER_HEIGHT};
  right: 0;
  min-width: ${px2rem(TOAST_MIN_WIDTH)};
  padding: ${({ theme }) => theme.spacing.s};
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

export const ToastText = styled.p`
  text-align: left;
  font-weight: bold;
`