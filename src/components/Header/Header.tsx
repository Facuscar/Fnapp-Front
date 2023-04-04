import * as S from "./Header.styles";

import Logo from "@fnapp/components/Atoms/Logo";

export const Header: React.FC = () => {

  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <Logo />
        <S.Name>Fnapp</S.Name>
      </S.LogoWrapper>
    </S.HeaderWrapper>
  );
}