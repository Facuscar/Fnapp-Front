import { type ReactNode, useState } from 'react';

import { SidebarLayout, SidebarWrapper, SidebarHeader, SidebarLogo, CloseButton } from './components';

interface SidebarProps {
  closeSidebar: () => void
  children: ReactNode
}

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
      <SidebarLayout onClick={handleClick} />
      <SidebarWrapper showSidebar={showSidebar}>
        <SidebarHeader>
          <SidebarLogo />
          <CloseButton onClick={handleClick}>X</CloseButton>
        </SidebarHeader>
        {children}
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
