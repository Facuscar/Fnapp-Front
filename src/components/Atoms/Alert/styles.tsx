import styled, { lighten } from "styled-components";

export const AlertWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => lighten(0.2, theme.colors.special.red)};
`