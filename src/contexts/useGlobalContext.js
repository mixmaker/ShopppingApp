import { createContext, useContext } from 'react';

export const GlobalContext = createContext({});

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default useGlobalContext;
