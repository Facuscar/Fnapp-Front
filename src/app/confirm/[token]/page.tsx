import axios from 'axios';

import Alert from '@fnapp/components/Atoms/Alert';
import { Header } from '@fnapp/components/Header/Header';

interface PageProps {
  params: { token: string }
}

interface ConfirmationResponse {
  msg: string
};

/* @ts-expect-error Async Server Component */
const Page: React.FC<PageProps> = async ({ params }) => {
  const { token } = params;

  const getConfirmation = async () => {
    try {
      const { data } = await axios.get<ConfirmationResponse>(`${process.env.NEXT_PUBLIC_API_USERS_URL}/confirm/${token}`);
      return {
        msg: data.msg,
        error: false
      };
    } catch (error: any) {
      if (error.response !== undefined) {
        return {
          msg: error.response.data.msg as string,
          error: true
        }
      }

      return {
        msg: 'Oops.. there was an error..',
        error: true
      }
    }
  }

  const data = await getConfirmation();
  const { error, msg } = data;

  return (
    <>
      <Header />
      {error && <Alert msg={msg} /> }
    </>
  );
}

export default Page;
