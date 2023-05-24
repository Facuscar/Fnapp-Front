import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const HomePageWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.home_page_wrapper} {...props} />
);

export const Title: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => (
  <h1 className={styles.title} {...props} />
);
