import { Theme, GlobalStyles } from '@fnapp/theme';

import StyledComponentsRegistry from './registry';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
        <Theme>
          <GlobalStyles />
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </Theme>
        </body>
      </html>
  );
}
