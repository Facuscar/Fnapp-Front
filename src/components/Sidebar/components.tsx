import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import Button, { type ButtonProps } from '@fnapp/components/Atoms/Button';
import Logo from '@fnapp/components/Atoms/Logo';

import styles from './styles.module.scss';

export const SidebarWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { showSidebar: boolean }> = ({ showSidebar, ...props }) => (
  <div className={`${styles.sidebar_wrapper} ${!showSidebar ? styles.hide_sidebar : ''}`} {...props} />
);

export const SidebarLayout: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.sidebar_layout} {...props} />
);

export const CloseButton: React.FC<ButtonProps> = (props) => (
  <Button className={styles.close_button} {...props} />
);

export const SidebarHeader: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.sidebar_header} {...props} />
);

export const SidebarLogo: React.FC = () => (
  <Logo className={styles.sidebar_logo} />
)
