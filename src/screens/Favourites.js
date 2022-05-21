import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useGlobalContext from '../contexts/useGlobalContext';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard';

const Favourites = () => {
  const inset = useSafeAreaInsets();
  const { colorConfig, fontConfig } = useGlobalContext();
  return (
    <View
      style={{ paddingTop: inset.top + 10, flex: 1, paddingHorizontal: 10 }}>
      <Text
        style={{
          fontFamily: fontConfig.semiBold,
          fontSize: 18,
          textAlign: 'center',
          marginBottom: 5,
          color: colorConfig.white,
        }}>
        Favourites
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <Button
          mode="contained"
          color={colorConfig.white}
          uppercase={false}
          labelStyle={{
            fontFamily: fontConfig.semiBold,
            fontSize: 14,
            color: colorConfig.dark,
          }}
          style={{ borderRadius: 24, paddingHorizontal: 10 }}>
          Summer
        </Button>
        <Button
          mode="contained"
          color={colorConfig.white}
          uppercase={false}
          labelStyle={{
            fontFamily: fontConfig.semiBold,
            fontSize: 14,
            color: colorConfig.dark,
          }}
          style={{ borderRadius: 24, paddingHorizontal: 10 }}>
          T-Shirts
        </Button>
        <Button
          mode="contained"
          color={colorConfig.white}
          uppercase={false}
          labelStyle={{
            fontFamily: fontConfig.semiBold,
            fontSize: 14,
            color: colorConfig.dark,
          }}
          style={{ borderRadius: 24, paddingHorizontal: 10 }}>
          Shirts
        </Button>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="filter" size={22} />
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontConfig.regular,
              marginLeft: 10,
            }}>
            Filters
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="sort-amount-asc" size={18} />
          <Text
            style={{
              fontSize: 12,
              fontFamily: fontConfig.regular,
              marginLeft: 10,
            }}>
            Price: low to high
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="grid-outline" size={18} />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {favouriteItems?.map(item => (
          <ProductCard product={item} key={`${item.title}.${item.subtitle}`} />
        ))}
      </View>
    </View>
  );
};

export default Favourites;

const favouriteItems = [
  {
    title: 'Shirt',
    subtitle: 'LIME',
    price: '$10',
    image: require('../assets/images/product9.jpg'),
    isnew: true,
    rating: 5,
    isFav: true,
  },
  {
    title: 'Longsleeve Violeta',
    subtitle: 'Mango',
    price: '$46',
    image: require('../assets/images/product6.jpg'),
    isnew: true,
    rating: 5,
    isFav: true,
  },
  {
    title: 'Shirt',
    subtitle: 'Olivier',
    price: '$52',
    image: require('../assets/images/product7.jpg'),
    isnew: true,
    rating: 5,
    isFav: true,
  },
  {
    title: 'T-Shirt',
    subtitle: '&Berries',
    price: '$46',
    image: require('../assets/images/product8.jpg'),
    discount: '-30%',
    oldPrice: '$55',
    rating: 5,
    isFav: true,
  },
];
