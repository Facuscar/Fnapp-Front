import Image from 'next/image';

import phoneImage from '@public/assets/home_image.png';

import { HomePageWrapper, Title, MainWrapper, TextWrapper, SubTitle } from './components';

const HomePage: React.FC = () => (
  <HomePageWrapper>
    <MainWrapper>
      <TextWrapper>
        <Title>All your expenses, in one <span>app</span></Title>
        <SubTitle>Track, Analyze, and Master Your Finances. Take control of your expenses, gain insights, and achieve financial freedom with ease</SubTitle>
      </TextWrapper>
      <Image src={phoneImage} height={800} width={400} alt='Smartphone with different incomes and outcomes of money' />
    </MainWrapper>
  </HomePageWrapper>
);

export default HomePage;
