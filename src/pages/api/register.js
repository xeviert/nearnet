import bcrypt from 'bcryptjs';
import { addUser, getUsers } from '../../userStore';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (getUsers().find(u => u.username === username)) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    addUser(username, hashedPassword);

    return res.status(201).json({ message: 'User registered successfully' });
  }

  res.status(405).end();
}
