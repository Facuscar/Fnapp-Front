import { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import Button, { type ButtonProps } from '@fnapp/components/Atoms/Button';

import styles from './styles.module.scss';

export const ModalLayout: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.modal_layout} {...props} />
);

export const ModalWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.modal_wrapper} {...props} />
);

export const CloseModalButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} />
)
