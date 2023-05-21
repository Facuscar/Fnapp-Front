import { type ReactNode, type DetailedHTMLProps, type HTMLAttributes } from 'react';

import Heading from '@fnapp/components/Atoms/Heading'
import EmailIcon from '@fnapp/components/Icons/EmailIcon'

import styles from './styles.module.scss';

export const ConfirmTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Heading as="h2" className={styles.heading}>{children}</Heading>
)

export const ConfirmSubtitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Heading as="h4" className={styles.heading}>{children}</Heading>
)

export const ConfirmAccountIcon: React.FC = () => (
  <EmailIcon className={styles.email_icon} />
)

export const ConfirmAccountWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div {...props} className={styles.wrapper} />
);
