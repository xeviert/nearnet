import { parseCookies } from 'nookies';

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const cookies = parseCookies();
    const auth = cookies.auth;

    if (!auth) {
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      } else {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        };
      }
    }

    return <Component {...props} />;
  };
}
