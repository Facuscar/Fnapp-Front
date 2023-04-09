import React from "react";

import * as S from './styles';

type InputProps = {
  name: string;
  placeholder: string;
  type: 'text' | 'number' | 'password' | 'search' | 'email';
  id?: string;
  defaultValue?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ name, placeholder, id, defaultValue, type}, ref) => {
  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={id || type}>{name}</S.InputLabel>
      <S.Input ref={ref} type={type} placeholder={placeholder} defaultValue={defaultValue}/>
    </S.InputWrapper>
    
  );
});

Input.displayName = 'Input';

export default Input;
