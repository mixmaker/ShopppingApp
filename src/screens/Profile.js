import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useGlobalContext from '../contexts/useGlobalContext';
import { Avatar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = () => {
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
        My Profile
      </Text>
      <View style={{ flexDirection: 'row', marginBottom: 30 }}>
        <Avatar.Image
          size={68}
          source={require('../assets/images/profile.jpg')}
        />
        <View style={{ marginLeft: 20, marginTop: 5 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: fontConfig.semiBold,
              color: colorConfig.white,
            }}>
            Matilda Brown
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontConfig.regullar,
              color: colorConfig.gray,
            }}>
            matildabrown@mail.com
          </Text>
        </View>
      </View>
      {itemsData?.map(item => (
        <ProfilePageItems item={item} key={item.title} />
      ))}
    </View>
  );
};

const itemsData = [
  {
    title: 'My orders',
    subtitle: 'Already have 12 orders',
  },
  {
    title: 'Shipping addresses',
    subtitle: '3 addresses',
  },
  {
    title: 'Payment methods',
    subtitle: 'Visa **34',
  },
  {
    title: 'Promocodes',
    subtitle: 'You have special promocodes',
  },
  {
    title: 'My reviews',
    subtitle: 'reviews for 4 items',
  },
  {
    title: 'Settings',
    subtitle: 'Notifications, password',
  },
];

const ProfilePageItems = ({ item }) => {
  const { colorConfig, fontConfig } = useGlobalContext();

  return (
    <View
      style={{
        marginVertical: 10,
        paddingVertical: 10,
        paddingLeft: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: fontConfig.semiBold,
            color: colorConfig.white,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 3,
            fontSize: 12,
            fontFamily: fontConfig.regullar,
            color: colorConfig.gray,
          }}>
          {item.subtitle}
        </Text>
      </View>
      <Entypo name="chevron-right" size={20} />
    </View>
  );
};
export default Profile;
