import bcrypt from 'bcryptjs';
import { addUser, getUsers } from '../../userStore';
import Cookies from 'cookies';

export default function handler(req, res) {
  const cookies = new Cookies(req, res);

  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (getUsers().find(u => u.username === username)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    addUser(username, hashedPassword);

    cookies.set('username', username, { httpOnly: true });
    cookies.set('auth', 'authenticated', { httpOnly: true });

    return res.status(201).json({ message: 'User registered and logged in successfully' });
  }

  res.status(405).end();
}
