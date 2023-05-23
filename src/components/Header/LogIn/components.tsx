import Button, { type ButtonProps } from '@fnapp/components/Atoms/Button';
import User from '@fnapp/components/Icons/UserIcon';

import styles from './styles.module.scss';

export const LogInButton: React.FC<ButtonProps & { children: string }> = ({ children, ...props }) => (
  <Button className={styles.button} {...props}>
    <User />
    {children}
  </Button>
);
