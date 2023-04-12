import { ReactNode } from 'react';
import Logo from '@fnapp/components/Atoms/Logo';

import * as S from './styles';

const Sidebar: React.FC<{ children: ReactNode }> = ({ children }) => (
  <S.SidebarWrapper>
    <Logo />
    {children}
  </S.SidebarWrapper>
);

export default Sidebar;