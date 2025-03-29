import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  const isUnauthenticated = status === 'unauthenticated';

  useEffect(() => {
    if (isUnauthenticated) {
      signIn();
    }
  }, [isUnauthenticated]);

  const isLoading = status === 'loading' || status === 'unauthenticated';

  return (
    <>
      {isLoading && 'Загрузка...'}
      {status === 'authenticated' && children}
    </>
  );
};
