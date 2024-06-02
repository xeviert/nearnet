import React, { createContext, useState, useContext } from 'react';
import { getFavors as fetchFavors, addFavor as addNewFavor } from '../favorsStore';

const FavorContext = createContext();

export const useFavorContext = () => {
  return useContext(FavorContext);
};

export const FavorProvider = ({ children }) => {
  const [favors, setFavors] = useState(fetchFavors());

  const addFavor = (title, payment, description, firstName, lastName) => {
    const newFavor = addNewFavor(title, payment, description, firstName, lastName);
    setFavors((prevFavors) => [newFavor, ...prevFavors]);
  };

  return (
    <FavorContext.Provider value={{ favors, addFavor }}>
      {children}
    </FavorContext.Provider>
  );
};
