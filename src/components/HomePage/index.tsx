import { HomePageWrapper } from './components';

import styles from './styles.module.scss';

const HomePage: React.FC = () => (
  <HomePageWrapper>
      <h1 className={styles.h1}>Homepage for unique<span>users</span></h1>
  </HomePageWrapper>
);

export default HomePage;
