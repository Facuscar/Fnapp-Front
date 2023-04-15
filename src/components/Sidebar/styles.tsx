import { px2rem } from "@fnapp/utils/px2rem";
import styled from "styled-components";

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
  max-width: ${px2rem(400)};
  width: '100%';
  overflow: hidden;
  z-index: 3;

  animation: ${({ showSidebar }) => showSidebar ? 'showSidebar' : 'hideSidebar'} 300ms;
  @keyframes showSidebar {
    0% {
      transform: translateX(${px2rem(500)});
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
      transform: translateX(${px2rem(500)});
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