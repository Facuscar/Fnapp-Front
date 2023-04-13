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
  width: ${({ showSidebar }) => showSidebar ? '100%' : 0};
  overflow: hidden;

  animation: fadeIn 300ms;
  @keyframes fadeIn {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`;
