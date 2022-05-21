import React from 'react';
import { Button } from 'react-native-paper';
import useGlobalContext from '../contexts/useGlobalContext';

const ButtonPrimary = ({ children, style }) => {
  const { colorConfig } = useGlobalContext();
  return (
    <Button
      mode="contained"
      color={colorConfig.primary}
      uppercase={false}
      style={{ ...style }}>
      {children}
    </Button>
  );
};

export default ButtonPrimary;
