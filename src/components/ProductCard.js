import { Pressable, View, Text, Image } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import useGlobalContext from '../contexts/useGlobalContext';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product, style }) => {
  const { fontConfig, colorConfig } = useGlobalContext();
  const { title, subtitle, image, price, isnew, discount, oldPrice, isFav } =
    product;
  const navigation = useNavigation();
  // console.log(product);
  return (
    <Pressable
      style={{ ...style, marginRight: 16, position: 'relative' }}
      onPress={() => navigation.navigate('ProductDetail', { product })}>
      <View style={{ position: 'relative' }}>
        <Image
          source={image}
          style={{
            borderRadius: 8,
            width: 164,
            height: 184,
            resizeMode: 'cover',
          }}
        />
        <Text
          style={{
            position: 'absolute',
            left: 10,
            top: 8,
            borderRadius: 29,
            backgroundColor: isnew ? colorConfig.background : colorConfig.sale,
            color: '#fff',
            paddingHorizontal: 5,
            paddingVertical: 3,
          }}>
          {isnew ? 'New' : discount}
        </Text>
        <Feather
          name={isFav ? 'shopping-bag' : 'heart'}
          size={16}
          color={isFav ? colorConfig.white : colorConfig.gray}
          style={{
            position: 'absolute',
            bottom: -10,
            right: 0,
            padding: 9,
            backgroundColor: isFav ? colorConfig.primary : colorConfig.dark,
            borderRadius: 17,
            elevation: 6,
          }}
        />
      </View>
      <View>
        <View
          style={{
            width: 110,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <AntDesign name="star" size={14} color={'#FFBA49'} />
          <AntDesign name="star" size={14} color={'#FFBA49'} />
          <AntDesign name="star" size={14} color={'#FFBA49'} />
          <AntDesign name="star" size={14} color={'#FFBA49'} />
          <AntDesign name="star" size={14} color={'#FFBA49'} />
          <Text style={{ color: colorConfig.gray }}>(10)</Text>
        </View>
        <Text
          style={{
            color: colorConfig.gray,
            fontSize: 13,
            marginBottom: 3,
            fontFamily: fontConfig.regular,
          }}>
          {subtitle}
        </Text>
        <Text
          style={{
            color: colorConfig.white,
            fontFamily: fontConfig.semiBold,
            fontSize: 16,
          }}>
          {title}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {!isnew && (
            <Text
              style={{
                textDecorationLine: 'line-through',
                color: colorConfig.gray,
                marginRight: 4,
                fontFamily: fontConfig.regular,
              }}>
              {oldPrice}
            </Text>
          )}
          <Text
            style={{
              color: colorConfig.sale,
              fontSize: 14,
              fontFamily: fontConfig.regular,
            }}>
            {price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
