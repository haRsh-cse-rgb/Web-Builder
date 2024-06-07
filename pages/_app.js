import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../utils/auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const publicPaths = ['/login', '/signup'];
    const pathIsPublic = publicPaths.includes(router.pathname);

    if (!isAuthenticated() && !pathIsPublic) {
      router.push('/login');
    }
  }, [router]);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
