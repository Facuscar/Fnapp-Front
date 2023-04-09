import { HTMLAttributes, ReactNode } from "react";

import * as S from './styles';

type ButtonProps = {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
} & HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props}) => {
  if (variant === 'primary') return <S.PrimaryButton {...props} />
  
  if (variant === 'ghost') return <S.GhostButton {...props} />

  return <button></button>
}

export default Button;
