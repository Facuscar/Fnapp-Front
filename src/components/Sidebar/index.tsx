import { ReactNode, useEffect, useState } from 'react';
import Logo from '@fnapp/components/Atoms/Logo';

import * as S from './styles';

type SidebarProps = {
  closeSidebar: () => void;
  children: ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({ children, closeSidebar }) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const handleClick = () => {
    setShowSidebar(false);
    setTimeout(() => {
      closeSidebar();
    }, 300);
  }
  

  return (
    <S.SidebarWrapper onClick={handleClick} showSidebar={showSidebar}>
      <Logo/>
      {children}
    </S.SidebarWrapper>
  );
  
};

export default Sidebar;