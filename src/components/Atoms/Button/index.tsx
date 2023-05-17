import { type ButtonHTMLAttributes, type DetailedHTMLProps, type ReactNode } from 'react';

import * as S from './styles';

export type ButtonProps = {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  isLoading?: boolean
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', isLoading, disabled, ...props }) => {
  const isButtonDisabled = isLoading ?? disabled;

  if (variant === 'primary') return <S.PrimaryButton {...props} disabled={isButtonDisabled} isLoading={isLoading}/>

  if (variant === 'ghost') return <S.GhostButton {...props} disabled={isButtonDisabled} />

  return <button {...props} />
}

export default Button;
