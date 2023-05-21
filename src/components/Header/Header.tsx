import Logo from '@fnapp/components/Atoms/Logo';
import { Routes } from '@fnapp/constants/routes';

import LogIn from './LogIn';

import { HeaderWrapper, LogoWrapper, Name } from './components';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper href={Routes.HOME}>
        <Logo />
        <Name>Fnapp</Name>
      </LogoWrapper>
      <LogIn />
    </HeaderWrapper>
  );
}
