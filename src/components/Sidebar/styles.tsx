import { px2rem } from "@fnapp/utils/px2rem";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
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
`;