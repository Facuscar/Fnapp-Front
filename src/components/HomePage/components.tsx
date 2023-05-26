import { type DetailedHTMLProps, type HTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const HomePageWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>> = (props) => (
  <section className={styles.home_page_wrapper} {...props} />
);

export const Title: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => (
  <h1 className={styles.title} {...props} />
);

export const MainWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div className={styles.main_wrapper} {...props} />
);

export const TextWrapper: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => (
  <div {...props} />
);

export const SubTitle: React.FC<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => (
  <div {...props} className={styles.subtitle} />
);
