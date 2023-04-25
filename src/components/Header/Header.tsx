import Logo from '@fnapp/components/Atoms/Logo';
import { Routes } from '@fnapp/constants/routes';

import LogIn from './LogIn';

import * as S from './Header.styles';

export const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper href={Routes.HOME}>
        <Logo />
        <S.Name>Fnapp</S.Name>
      </S.LogoWrapper>
      <LogIn />
    </S.HeaderWrapper>
  );
}
