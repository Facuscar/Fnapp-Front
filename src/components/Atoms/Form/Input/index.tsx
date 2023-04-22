import React, { type HTMLAttributes } from 'react';

import * as S from './styles';

export type InputProps = HTMLAttributes<HTMLInputElement> & {
  name: string
  type: 'text' | 'number' | 'password' | 'search' | 'email'
  id?: string
  hasError?: boolean
  disabled?: boolean
  errorMessage?: string
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ name, id, type, hasError, errorMessage, ...props }, ref) => {
  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={id ?? type}>{name}</S.InputLabel>
      <S.Input ref={ref} id={id} type={type} hasError={hasError} {...props}/>
      { (hasError ?? false) && <S.ErrorMessage>{errorMessage ?? 'There is an error'}</S.ErrorMessage> }
    </S.InputWrapper>

  );
});

Input.displayName = 'Input';

export default Input;
