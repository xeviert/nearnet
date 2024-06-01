import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import { getUsers } from '../../userStore';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    console.log("Request received:", { username, password });

    const user = getUsers().find(u => u.username === username);

    console.log("User found:", user);

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = 'authenticated'; // Simple session token for demonstration

      console.log("User authenticated, setting cookie...");

      res.setHeader('Set-Cookie', serialize('auth', token, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 }));

      return res.status(200).json({ message: 'Logged in successfully' });
    }

    console.log("Invalid credentials");

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  console.log("Invalid request method");
  res.status(405).end();
}
