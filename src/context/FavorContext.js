import React, { createContext, useState, useContext, useEffect } from 'react';
import { getFavors as fetchFavors, addFavor as addNewFavor } from '../favorsStore';

const FavorContext = createContext();

export const useFavorContext = () => {
  return useContext(FavorContext);
};

export const FavorProvider = ({ children }) => {
  const [favors, setFavors] = useState([]);

  useEffect(() => {
    const sessionFavors = JSON.parse(sessionStorage.getItem('favors'));
    if (sessionFavors) {
      setFavors(sessionFavors);
    } else {
      const initialFavors = fetchFavors();
      setFavors(initialFavors);
      sessionStorage.setItem('favors', JSON.stringify(initialFavors));
    }
  }, []);

  const addFavor = (title, payment, description, firstName, lastName) => {
    const newFavor = addNewFavor(title, payment, description, firstName, lastName);
    const updatedFavors = [newFavor, ...favors];
    setFavors(updatedFavors);
    sessionStorage.setItem('favors', JSON.stringify(updatedFavors));
  };

  return (
    <FavorContext.Provider value={{ favors, addFavor }}>
      {children}
    </FavorContext.Provider>
  );
};
