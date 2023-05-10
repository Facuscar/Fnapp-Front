import axios from 'axios';

import { Header } from '@fnapp/components/Header/Header';

interface PageProps {
  params: { token: string }
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { token } = params;

  return (
    <>
      <Header />
      Confirmation page {token}
    </>
  );
}

export default Page;
