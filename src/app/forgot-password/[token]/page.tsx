import axios from 'axios';

import Alert from '@fnapp/components/Atoms/Alert';
import { Header } from '@fnapp/components/Header/Header';
import ForgotPasswordForm from '@fnapp/components/ForgotPasswordForm';

interface PageProps {
  params: { token: string }
}

/* @ts-expect-error Async Server Component */
const Page: React.FC<PageProps> = async ({ params }) => {
  const { token } = params;

  const validateToken = async () => {
    try {
      await axios.get<{ msg: string }>(`${process.env.NEXT_PUBLIC_API_USERS_URL}/forgot-password/${token}`);
    } catch (error: any) {
      if (error.response !== undefined) {
        return {
          msg: error.response.data.msg as string
        };
      }

      return {
        msg: 'Oops.. there was an error..'
      }
    }
  }

  const data = await validateToken();

  const msg = data?.msg;

  return (
    <>
      <Header />
      { msg !== undefined
        ? <Alert msg={msg} error />
        : <ForgotPasswordForm token={token} /> }
    </>
  );
};

export default Page;
