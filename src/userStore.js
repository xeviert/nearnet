import bcrypt from 'bcryptjs';

const users = [
  { username: 'admin', password: bcrypt.hashSync('password', 10) }
];

export const getUsers = () => users;

export const addUser = (username, password) => {
  users.push({ username, password });
};
