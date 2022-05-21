import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import useGlobalContext from '../contexts/useGlobalContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonPrimary from '../components/ButtonPrimary';
import { Divider } from 'react-native-paper';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ route, navigation }) => {
  const { colorConfig, fontConfig } = useGlobalContext();
  const inset = useSafeAreaInsets();
  const { title, image, price, subtitle } = route.params.product;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: inset.top,
          padding: 10,
          backgroundColor: colorConfig.background,
          elevation: 10,
        }}>
        <Feather
          name="chevron-left"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: fontConfig.bold,
            color: colorConfig.white,
          }}>
          {title}
        </Text>
        <Entypo name="share" size={22} />
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <ScrollView
          horizontal
          contentContainerStyle={{ flexGrow: 1 }}
          showsHorizontalScrollIndicator={false}>
          <Image
            source={image}
            style={{ height: 420, width: 275, marginRight: 5 }}
          />
          <Image
            source={image}
            style={{ height: 420, width: 275, marginRight: 5 }}
          />
          <Image
            source={image}
            style={{ height: 420, width: 275, marginRight: 5 }}
          />
        </ScrollView>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 10,
            height: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colorConfig.gray,
              paddingHorizontal: 10,
              width: 130,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 8,
            }}>
            <Text>Size</Text>
            <Entypo name="chevron-small-down" size={20} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: colorConfig.gray,
              paddingHorizontal: 10,
              width: 130,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 8,
            }}>
            <Text>Color</Text>
            <Entypo name="chevron-small-down" size={20} />
          </View>
          <Feather
            name="heart"
            size={16}
            color={colorConfig.gray}
            style={{
              height: 34,
              padding: 9,
              backgroundColor: colorConfig.dark,
              borderRadius: 17,
              elevation: 6,
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                fontSize: 24,
                color: colorConfig.white,
                fontFamily: fontConfig.semiBold,
              }}>
              {subtitle}
            </Text>
            <Text style={{ fontSize: 13, color: colorConfig.gray }}>
              {title}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 24,
              color: colorConfig.white,
              fontFamily: fontConfig.semiBold,
            }}>
            {price}
          </Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            width: 95,
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <AntDesign name="star" size={12} color={'#FFBA49'} />
          <AntDesign name="star" size={12} color={'#FFBA49'} />
          <AntDesign name="star" size={12} color={'#FFBA49'} />
          <AntDesign name="star" size={12} color={'#FFBA49'} />
          <AntDesign name="star" size={12} color={'#FFBA49'} />
          <Text style={{ color: colorConfig.gray, fontSize: 12 }}>(10)</Text>
        </View>
        <Text
          numberOfLines={2}
          style={{
            paddingHorizontal: 10,
            marginTop: 10,
            fontFamily: fontConfig.regular,
            letterSpacing: 0.5,
            lineHeight: 20,
            color: colorConfig.white,
          }}>
          {title} in soft cotton jersey with decorative buttons down the front
          and a wide, frill-trimmed square neckline with concealed elastication.
          Elasticated seam under the bust and short puff sleeves with a small
          frill trim.
        </Text>
        <ButtonPrimary
          style={{
            marginHorizontal: 10,
            paddingVertical: 6,
            marginVertical: 20,
            borderRadius: 25,
          }}>
          <Text style={{ fontFamily: fontConfig.regular }}>ADD TO CART</Text>
        </ButtonPrimary>
        <Divider style={{ backgroundColor: colorConfig.gray, opacity: 0.4 }} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fontConfig.regular,
              color: colorConfig.white,
            }}>
            Shipping info
          </Text>
          <Entypo name="chevron-right" size={20} color={colorConfig.white} />
        </View>
        <Divider style={{ backgroundColor: colorConfig.gray, opacity: 0.4 }} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fontConfig.regular,
              color: colorConfig.white,
            }}>
            Support
          </Text>
          <Entypo name="chevron-right" size={20} color={colorConfig.white} />
        </View>
        <Divider style={{ backgroundColor: colorConfig.gray, opacity: 0.4 }} />
        <View style={{ paddingHorizontal: 10, marginTop: 25 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontConfig.semiBold,
              color: colorConfig.white,
            }}>
            You can also like this
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}>
            {relatedProducts?.map(item => (
              <ProductCard
                product={item}
                key={`${item.title}.${item.subtitle}`}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetail;

const relatedProducts = [
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
    title: 'Evening Dress',
    subtitle: 'Dorothy Perkins',
    price: '$12',
    image: require('../assets/images/product3.jpg'),
    discount: '-20%',
    oldPrice: '$15',
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
