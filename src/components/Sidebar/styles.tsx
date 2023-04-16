import styled from "styled-components";

import Button from "@fnapp/components/Atoms/Button";
import Logo from '@fnapp/components/Atoms/Logo';
import { px2rem } from "@fnapp/utils/px2rem";

const SIDEBAR_MAX_WIDTH = 400;

export const SidebarWrapper = styled.div<{ showSidebar: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary.l};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.s};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: ${px2rem(SIDEBAR_MAX_WIDTH)};
  width: '100%';
  overflow: hidden;
  z-index: 3;

  animation: ${({ showSidebar }) => showSidebar ? 'showSidebar' : 'hideSidebar'} 300ms;
  @keyframes showSidebar {
    0% {
      transform: translateX(${px2rem(SIDEBAR_MAX_WIDTH)});
    }
    100% {
      transform: translateX(${px2rem(0)});
    }
  }

  @keyframes hideSidebar {
    0% {
      transform: translateX(${px2rem(0)});
    }
    100% {
      transform: translateX(${px2rem(SIDEBAR_MAX_WIDTH)});
    }
  }
`;

export const SidebarLayout = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.special.black};
  opacity: 0.65;
  position: absolute;
  z-index: 2;
`

export const CloseButton = styled(Button)`
  flex: 0 1 auto;
  margin-left: auto;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const SidebarLogo = styled(Logo)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;