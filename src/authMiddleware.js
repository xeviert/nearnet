import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserContext } from './context/UserContext';

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user } = useUserContext();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user, router]);

    if (!user) {
      return <div>Loading...</div>; // Show a loading indicator while redirecting
    }

    return <Component {...props} />;
  };
}
