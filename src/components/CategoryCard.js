import { View, Text, Image } from 'react-native';
import React from 'react';
import useGlobalContext from '../contexts/useGlobalContext';

const CategoryCard = ({ title, image }) => {
  const { colorConfig, fontConfig } = useGlobalContext();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        marginHorizontal: 10,
        marginTop: 15,
        backgroundColor: colorConfig.dark,
        borderRadius: 8,
      }}>
      <Text
        style={{
          width: '50%',
          fontSize: 18,
          color: colorConfig.white,
          alignSelf: 'center',
          //   backgroundColor:'blue',
          paddingLeft: 25,
        }}>
        {title}
      </Text>
      <Image source={image} style={{ width: '50%', height:'100%' }} />
    </View>
  );
};

export default CategoryCard;
