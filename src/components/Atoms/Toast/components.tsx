import { type DetailedHTMLProps, type HTMLAttributes, type SVGProps } from 'react';

import Alert from '@fnapp/components/Icons/AlertIcon';
import Button, { type ButtonProps } from '@fnapp/components/Atoms/Button';

import styles from './styles.module.scss';

export const ToastWrapper: React.FC<{ isClosing: boolean } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ isClosing, ...props }) => {
  const classNames = `${styles.toast_wrapper} ${isClosing ? styles.hide_toast : styles.show_toast}`

  return (
    <div className={classNames} {...props} />
  );
};

export const CloseButton: React.FC<ButtonProps> = (props) => (
  <Button className={styles.close_button} {...props} />
)

export const ToastText: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = (props) => (
  <p className={styles.toast_text} {...props} />
)

export const ToastAlert: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <Alert className={styles.toast_alert} {...props} />
)

export const TimeBar: React.FC<{ isClosing: boolean } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ isClosing, ...props }) => {
  const classNames = `${styles.toast_wrapper} ${isClosing ? styles.is_closing : ''}`

  return (
    <div className={classNames} {...props} />
  );
};
