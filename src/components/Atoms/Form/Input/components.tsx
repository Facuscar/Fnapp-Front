import React, { type ReactNode, type DetailedHTMLProps } from 'react';

import { type InputProps } from '.';
import styles from './styles.module.scss';

export const InputWrapper: React.FC<{ children: ReactNode }> = (props) => (
  <div className={styles.input_wrapper} {...props} />
)

export const InputLabel: React.FC<DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>> = (props) => (
  <label className={styles.input_label} {...props} />
);

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(({ hasError, ...props }, ref) => {
  const classNames = styles.form_input + ' ' + (hasError !== undefined ? styles.error : '');

  return (
    <input className={classNames} {...props} ref={ref} />
  )
});

FormInput.displayName = 'FormInput';

export const ErrorMessage: React.FC<DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = (props) => (
  <p className={styles.error_message} {...props} />
);
