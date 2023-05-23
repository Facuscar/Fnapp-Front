import { type DetailedHTMLProps, type FormHTMLAttributes } from 'react';

import Button, { type ButtonProps } from '@fnapp/components/Atoms/Button';

import styles from './styles.module.scss';

export const Form: React.FC<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = (props) => (
  <form className={styles.form} {...props} />
);

export const RegisterButton: React.FC<ButtonProps> = (props) => (
  <Button className={styles.button} {...props} />
);
