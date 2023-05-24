import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const HomePageWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.home_page_wrapper} {...props} />
);
