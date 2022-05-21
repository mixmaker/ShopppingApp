import { View, Text } from 'react-native';
import React from 'react';
import useGlobalContext from '../contexts/useGlobalContext';
import CategoryCard from '../components/CategoryCard';

const WomensCategoryTab = () => {
  const { colorConfig, fontConfig } = useGlobalContext();
  return (
    <View>
      <View
        style={{
          height: 100,
          backgroundColor: colorConfig.sale,
          marginTop: 16,
          marginHorizontal: 10,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colorConfig.white,
            fontFamily: fontConfig.semiBold,
            fontSize: 24,
          }}>
          SUMMER SALES
        </Text>
        <Text
          style={{
            color: colorConfig.white,
            fontFamily: fontConfig.regular,
            fontSize: 14,
          }}>
          Up to 50% off
        </Text>
      </View>
      <View>
        <CategoryCard
          title="New"
          image={require('../assets/images/category1.jpg')}
        />
        <CategoryCard
          title="Clothes"
          image={require('../assets/images/category2.jpg')}
        />
        <CategoryCard
          title="Shoes"
          image={require('../assets/images/category3.jpg')}
        />
        <CategoryCard
          title="Accesories"
          image={require('../assets/images/category4.jpg')}
        />
      </View>
    </View>
  );
};

export default WomensCategoryTab;
