'use client';

import styled from "styled-components";

import { px2rem } from "@fnapp/utils/px2rem";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ButtonProps } from ".";

const AnimatedWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: calc(50% - ${px2rem(100)});
  height: ${px2rem(14)};

  & div {
    display: inline-block;
    position: absolute;
    left: ${px2rem(8)};
    width: ${px2rem(16)};
    background: #fff;
    animation: loading-animation 600ms cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }

  & div:nth-child(1) {
  left: ${px2rem(8)};
  animation-delay: -0.24s;
  }

  & div:nth-child(2) {
  left: ${px2rem(32)};
  animation-delay: -0.12s;
}

  & div:nth-child(3) {
    left: ${px2rem(56)};
    animation-delay: 0;
  }

  @keyframes loading-animation {
    0% {
      top: ${px2rem(0)};
      height: ${px2rem(14)};
    }
    50%, 100% {
      top: ${px2rem(7)};
      height: ${px2rem(7)};
    }
  }
`;

const LoadingAnimation: React.FC = (props) => (
  <AnimatedWrapper {...props}>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
  </AnimatedWrapper>
);

const Button: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps> = ({isLoading, children, ...props}) => (
  <button {...props}>{isLoading ? <LoadingAnimation /> : children}</button>
);

export const PrimaryButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps> = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary.m};
  color: ${({ theme }) => theme.colors.special.white};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${px2rem(3)};
  border: none;
  cursor: pointer;
  transition: background-color 200ms;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.l};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.l};
  }
`;

export const GhostButton: React.FC = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary.m};
  padding: ${({ theme }) => theme.spacing.xs};
  border: 2px solid ${({ theme }) => theme.colors.primary.m};
  cursor: pointer;
`