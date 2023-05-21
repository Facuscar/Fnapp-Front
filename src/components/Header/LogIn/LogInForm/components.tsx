import { type DetailedHTMLProps, type FormHTMLAttributes } from 'react';

import Button, { type ButtonProps } from '@fnapp/components/Atoms/Button';
import Heading from '@fnapp/components/Atoms/Heading';

import styles from './styles.module.scss';

export const Form: React.FC<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = (props) => (
  <form className={styles.form} />
);

export const FormTitle: React.FC<{ children: string }> = ({ children }) => (
  <Heading as="h4" className={styles.heading}>{children}</Heading>
);

export const LogInButton: React.FC<ButtonProps> = (props) => (
  <Button className={styles.login_button} {...props} />
);
