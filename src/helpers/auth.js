import { parseCookies } from 'nookies';

export function isAuthenticated(req) {
  const cookies = parseCookies({ req });
  return cookies.auth === 'authenticated';
}
