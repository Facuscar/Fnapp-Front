import * as S from "./Header.styles";

import Button from "@fnapp/components/Atoms/Button";
import Logo from "@fnapp/components/Atoms/Logo";
import { Routes } from "@fnapp/constants/routes";

export const Header: React.FC = () => {

  return (
    <S.HeaderWrapper>
      <S.LogoWrapper href={Routes.HOME}>
        <Logo />
        <S.Name>Fnapp</S.Name>
      </S.LogoWrapper>
      <Button>Log in</Button>
    </S.HeaderWrapper>
  );
}