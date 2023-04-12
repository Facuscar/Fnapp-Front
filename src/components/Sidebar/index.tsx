import { ReactNode, useEffect, useState } from 'react';
import Logo from '@fnapp/components/Atoms/Logo';

import * as S from './styles';

type SidebarProps = {
  isVisible: boolean;
  closeSidebar: () => void;
  children: ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ children, isVisible, closeSidebar }) => {
  const [showSidebar, setShowSidebar] = useState();

  useEffect(() => {
    
  }, [isVisible])

  return (
    <S.SidebarWrapper>
      <Logo />
      {children}
    </S.SidebarWrapper>
  );
  
};

export default Sidebar;