import { type DetailedHTMLProps, type FormHTMLAttributes, type HTMLAttributes } from 'react';

import Heading from '@fnapp/components/Atoms/Heading';

import styles from './styles.module.scss';

export const Form: React.FC<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>> = (props) => (
  <form className={styles.form} {...props} />
);

export const Title: React.FC<{ children: string }> = ({ children }) => (
  <Heading as='h1' className={styles.title}>
    {children}
  </Heading>
);

export const Wrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.wrapper} {...props} />
)
