import { type ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';

import Heading from '@fnapp/components/Atoms/Heading';

import styles from './styles.module.scss';

export const HeaderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <header className={styles.header}>
    {children}
  </header>
)

export const Name: React.FC<{ children: string }> = ({ children }) => (
  <Heading as="h1" className={styles.heading}>{children}</Heading>
);

export const LogoWrapper: React.FC<LinkProps & { children: ReactNode }> = ({ children, href }) => (
  <Link href={href} className={styles.wrapper}>{children}</Link>
);
