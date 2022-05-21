import { View, Text, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BagCard from '../components/BagCard';
import useGlobalContext from '../contexts/useGlobalContext';
import ButtonPrimary from '../components/ButtonPrimary';
import { TextInput } from 'react-native-paper';

const Bag = () => {
  const { colorConfig, fontConfig } = useGlobalContext();
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: inset.top + 10,
        paddingHorizontal: 10,
      }}>
      <Text
        style={{
          fontSize: 34,
          fontFamily: fontConfig.bold,
          color: colorConfig.white,
          marginBottom: 20,
        }}>
        My Bag
      </Text>
      {bagItems?.map(item => (
        <BagCard bagObj={item} key={item.title} />
      ))}
      <KeyboardAvoidingView behavior="position">
        <TextInput
          mode="outlined"
          placeholder="Enter your promo code"
          dense
          outlineColor={colorConfig.dark}
          activeOutlineColor={colorConfig.dark}
          theme={{
            roundness: 8,
            fonts: { regular: { fontFamily: fontConfig.regular, } },
          }}
          style={{
            backgroundColor: colorConfig.dark,
            borderWidth: 0,
            fontFamily: fontConfig.regular,
          }}
          right={
            <TextInput.Icon
              name="arrow-right"
              color={colorConfig.dark}
              style={{ backgroundColor: colorConfig.gray }}
            />
          }
        />
      </KeyboardAvoidingView>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{ fontFamily: fontConfig.medium, color: colorConfig.gray }}>
          Total amount:
        </Text>
        <Text
          style={{
            color: colorConfig.white,
            fontFamily: fontConfig.semiBold,
            fontSize: 18,
          }}>
          $124
        </Text>
      </View>
      <ButtonPrimary
        style={{
          borderRadius: 24,
          paddingVertical: 5,
        }}>
        <Text style={{ fontFamily: fontConfig.regular }}>CHECK OUT</Text>
      </ButtonPrimary>
    </View>
  );
};

const bagItems = [
  {
    title: 'Pullover',
    color: 'Black',
    size: 'L',
    price: '$51',
    image: require('../assets/images/bag1.jpg'),
  },
  {
    title: 'T-Shirt',
    color: 'Gray',
    size: 'L',
    price: '$30',
    image: require('../assets/images/bag2.jpg'),
  },
  {
    title: 'Sport Dress',
    color: 'Black',
    size: 'M',
    price: '$43',
    image: require('../assets/images/bag3.jpg'),
  },
];
export default Bag;
