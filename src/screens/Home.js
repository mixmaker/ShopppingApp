import { ScrollView, View, Text, Image } from 'react-native';
import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import useGlobalContext from '../contexts/useGlobalContext';
import ProductCard from '../components/ProductCard';
import home1 from '../assets/images/home1.jpg';

const Home = () => {
  const { fontConfig, colorConfig } = useGlobalContext();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ height: 550 }}>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            left: 10,
            zIndex: 2,
            width: '60%',
          }}>
          <Text
            style={{
              fontFamily: fontConfig.bold,
              fontSize: 54,
              color: colorConfig.white,
            }}>
            Fashion Sale
          </Text>
          <ButtonPrimary style={{ borderRadius: 25, width: 170 }}>
            Check
          </ButtonPrimary>
        </View>
        <Image
          source={home1}
          style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
        />
      </View>
      <View style={{ marginTop: 30, paddingHorizontal: 14 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View>
            <Text
              style={{
                fontFamily: fontConfig.bold,
                fontSize: 40,
                color: colorConfig.white,
              }}>
              New
            </Text>
            <Text style={{ color: colorConfig.gray, fontSize: 13 }}>
              You've never seen it before!
            </Text>
          </View>
          <View>
            <Text style={{ color: colorConfig.white, fontSize: 13 }}>
              View all
            </Text>
          </View>
        </View>
        <ScrollView horizontal>
          {newProducts.map(product => (
            <ProductCard product={product} key={`new.${product.title}`} />
          ))}
        </ScrollView>
      </View>
      <View style={{ marginVertical: 30, paddingHorizontal: 14 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View>
            <Text
              style={{
                fontFamily: fontConfig.bold,
                fontSize: 40,
                color: colorConfig.white,
              }}>
              Sale
            </Text>
            <Text style={{ color: colorConfig.gray, fontSize: 13 }}>
              Super summer sale
            </Text>
          </View>
          <View>
            <Text style={{ color: colorConfig.white, fontSize: 13 }}>
              View all
            </Text>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {saleProducts.map(product => (
            <ProductCard product={product} key={`sale.${product.title}`} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
export default Home;

const newProducts = [
  {
    title: 'Blouse',
    subtitle: 'OVS',
    price: '$30',
    image: require('../assets/images/product1.jpg'),
    isnew: true,
    rating: 5,
  },
  {
    title: 'T-Shirt Sailing',
    subtitle: 'Mongo Boy',
    price: '$10',
    image: require('../assets/images/product2.jpg'),
    isnew: true,
    rating: 5,
  },
];

const saleProducts = [
  {
    title: 'Evening Dress',
    subtitle: 'Dorothy Perkins',
    price: '$12',
    image: require('../assets/images/product3.jpg'),
    discount: '-20%',
    oldPrice: '$15',
    rating: 5,
  },
  {
    title: 'Sport Dress',
    subtitle: 'Sitlly',
    price: '$19',
    image: require('../assets/images/product4.jpg'),
    discount: '-15%',
    oldPrice: '$22',
    rating: 5,
  },
  {
    title: 'Sporty Dress',
    subtitle: 'Dorothy Perkins',
    price: '$12',
    image: require('../assets/images/product5.jpg'),
    discount: '-20%',
    oldPrice: '$14',
    rating: 5,
  },
];
