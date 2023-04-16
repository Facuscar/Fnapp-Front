import styled from "styled-components";
import { lighten } from "polished";

export const AlertWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => lighten(0.1, theme.colors.special.red)};
`