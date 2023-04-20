import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

import * as S from './styles';

export type ButtonProps = {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props}) => {
  const { isLoading } = props;
  if (variant === 'primary') return <S.PrimaryButton {...props} disabled={!!isLoading}/>
  
  if (variant === 'ghost') return <S.GhostButton {...props} />

  return <button {...props}></button>
}

export default Button;
