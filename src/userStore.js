import bcrypt from 'bcryptjs';

const users = [
  {
    username: 'admin',
    password: bcrypt.hashSync('password', 10),
    first_name: 'John',
    last_name: 'Doe',
    address: '1234 Elm Street, Springfield, USA',
    email: 'john.doe@example.com'
  }
];

export const getUsers = () => users;

export const addUser = (username, password, firstName, lastName, address, email) => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, password: hashedPassword, first_name: firstName, last_name: lastName, address, email });
};

export const getUserByUsername = (username) => {
  return users.find(user => user.username === username);
};
