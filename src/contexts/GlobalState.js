import React from 'react';
import { GlobalContext } from './useGlobalContext';

const GlobalState = ({ children }) => {
  const colorConfig = {
    white: '#F6F6F6',
    gray: '#ABB4BD',
    primary: '#EF3651',
    background: '#1E1F28',
    dark: '#2A2C36',
    error: '#FF2424',
    success: '#55D85A',
    sale: '#FF3E3E',
    ordinaryText: '#F5F5F5',
  };
  const fontConfig = {
    black: 'Metropolis-Black',
    regular: 'Metropolis-Regular',
    medium: 'Metropolis-Medium',
    semiBold: 'Metropolis-SemiBold',
    bold: 'Metropolis-Bold',
  };
  return (
    <GlobalContext.Provider value={{ colorConfig, fontConfig }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
