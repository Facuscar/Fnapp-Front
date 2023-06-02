import React, { type DetailedHTMLProps, type InputHTMLAttributes } from 'react';

import { InputWrapper, InputLabel, FormInput, ErrorMessage } from './components';

export type InputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'> & {
  name: string
  type: 'text' | 'number' | 'password' | 'search' | 'email'
  id?: string
  hasError?: boolean
  disabled?: boolean
  errorMessage?: string
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ name, id, type, hasError, errorMessage, ...props }, ref) => (
  <InputWrapper>
    <InputLabel htmlFor={id ?? type}>{name}</InputLabel>
    <FormInput name={name} ref={ref} id={id} type={type} hasError={hasError} {...props}/>
    { (hasError ?? false) && <ErrorMessage>{errorMessage ?? 'There is an error'}</ErrorMessage> }
  </InputWrapper>
));

Input.displayName = 'Input';

export default Input;
