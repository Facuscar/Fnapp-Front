import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import { type ButtonProps } from '.';

import styles from './styles.module.scss';

const LoadingAnimation: React.FC = (props) => (
  <div className={styles.animated_wrapper} {...props}>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
  </div>
);

const Button: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps> = ({ isLoading, children, ...props }) => (
  <button {...props}>{(isLoading ?? false) ? <LoadingAnimation /> : children}</button>
);

export const PrimaryButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps> = ({ className, ...props }) => (
  <Button className={`${styles.primary_button} ${className}`} {...props} />
);

export const GhostButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonProps> = ({ className, ...props }) => (
  <Button className={`${styles.ghost_button} ${className}`} {...props} />
);
