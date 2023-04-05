import * as S from "./Header.styles";

import Logo from "@fnapp/components/Atoms/Logo";
import { Routes } from "@fnapp/constants/routes";

export const Header: React.FC = () => {

  return (
    <S.HeaderWrapper>
      <S.LogoWrapper href={Routes.HOME}>
        <Logo />
        <S.Name>Fnapp</S.Name>
      </S.LogoWrapper>
    </S.HeaderWrapper>
  );
}