import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WomensCategoryTab from './WomensCategoryTab';
import MensCategoryTab from './MensCategoryTab';
import KidsCategoryTab from './KidsCategoryTab';
import useGlobalContext from '../contexts/useGlobalContext';

const TopTab = createMaterialTopTabNavigator();

const Shop = () => {
  const inset = useSafeAreaInsets();
  const { colorConfig, fontConfig } = useGlobalContext();
  return (
    <View style={{ paddingTop: inset.top + 10, flex: 1 }}>
      <Text
        style={{
          fontFamily: fontConfig.semiBold,
          fontSize: 18,
          textAlign: 'center',
          marginBottom: 5,
          color: colorConfig.white,
        }}>
        Categories
      </Text>
      <TopTab.Navigator
        screenOptions={({ navigation }) => {
          return {
            tabBarStyle: { backgroundColor: colorConfig.background },
            tabBarLabelStyle: {
              fontSize: 16,
              textTransform: 'none',
              fontFamily: fontConfig.semiBold,
            },
            tabBarIndicatorStyle: {
              backgroundColor: colorConfig.primary,
              height: 3,
            },
          };
        }}>
        <TopTab.Screen name="Women" component={WomensCategoryTab} />
        <TopTab.Screen name="Men" component={MensCategoryTab} />
        <TopTab.Screen name="Kids" component={KidsCategoryTab} />
      </TopTab.Navigator>
    </View>
  );
};

export default Shop;
