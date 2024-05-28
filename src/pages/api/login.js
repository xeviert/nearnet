import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { getUsers } from '../../userStore';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const user = getUsers().find(u => u.username === username);

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = 'authenticated'; // Simple session token for demonstration

      res.setHeader('Set-Cookie', serialize('auth', token, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 }));

      return res.status(200).json({ message: 'Logged in successfully' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(405).end();
}
