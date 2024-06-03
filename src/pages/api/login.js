import bcrypt from 'bcryptjs';
import { getUsers } from '../../userStore';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    const user = getUsers().find(u => u.username === username);

    if (user && bcrypt.compareSync(password, user.password)) {
      // Instead of setting a cookie, return the user info
      return res.status(200).json({ message: 'Logged in successfully', user });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(405).end();
}
