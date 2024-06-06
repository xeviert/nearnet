import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = Cookies.get('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const checkSessionExpiration = () => {
      const savedUser = Cookies.get('user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        const currentTime = new Date().getTime();
        if (currentTime > user.expiry) {
          logoutUser();
        }
      }
    };

    // Check session expiration every 3 minutes
    const interval = setInterval(checkSessionExpiration, 180000);

    return () => clearInterval(interval);
  }, []);

  const loginUser = (userData) => {
    const currentTime = new Date().getTime();
    const expiryTime = currentTime + 15 * 60 * 1000; // 15 minutes in milliseconds
    const userWithExpiry = { ...userData, expiry: expiryTime };

    setUser(userWithExpiry);
    Cookies.set('user', JSON.stringify(userWithExpiry), { expires: 1 / 96 }); // 1/96 of a day is 15 minutes
  };

  const logoutUser = () => {
    setUser(null);
    Cookies.remove('user');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
