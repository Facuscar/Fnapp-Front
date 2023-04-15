import { ReactNode, useState } from 'react';
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
    }, 250);
  }
  

  return (
    <>
      <S.SidebarLayout onClick={handleClick} />
      <S.SidebarWrapper showSidebar={showSidebar}>
        <S.SidebarHeader>
          <S.SidebarLogo/>
          <S.CloseButton onClick={handleClick}>X</S.CloseButton>
        </S.SidebarHeader>
        {children}
      </S.SidebarWrapper>
    </>
  );
  
};

export default Sidebar;