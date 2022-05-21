import { View, Text, Image } from 'react-native';
import React from 'react';
import useGlobalContext from '../contexts/useGlobalContext';
import Entypo from 'react-native-vector-icons/Entypo';

const BagCard = ({ bagObj }) => {
  const { colorConfig, fontConfig } = useGlobalContext();
  return (
    <View
      style={{
        marginBottom: 25,
        height: 104,
        backgroundColor: colorConfig.dark,
        flexDirection: 'row',
        borderRadius: 8,
        overflow: 'hidden',
      }}>
      <View style={{ width: '30%' }}>
        <Image
          source={bagObj?.image}
          style={{ width: '100%', height:'100%', backgroundColor: 'red', resizeMode: 'cover' }}
        />
      </View>
      <View style={{ padding: 10, width: '70%' }}>
        <View style={{ flexDirection: 'row', flex: 1, height: '50%' }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                color: colorConfig.white,
                fontFamily: fontConfig.medium,
              }}>
              {bagObj?.title}
            </Text>
            <View style={{ flexDirection: 'row', marginTop: 2 }}>
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 12,
                  color: colorConfig.gray,
                  fontFamily: fontConfig.regular,
                }}>
                Color:{' '}
                <Text style={{ color: colorConfig.white }}>
                  {bagObj?.color}
                </Text>
              </Text>
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 12,
                  color: colorConfig.gray,
                  fontFamily: fontConfig.regular,
                }}>
                Size:{' '}
                <Text style={{ color: colorConfig.white }}>{bagObj?.size}</Text>
              </Text>
            </View>
          </View>
          <Entypo
            name="dots-three-vertical"
            size={18}
            color={colorConfig.gray}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '50%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '50%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Entypo
              name="minus"
              size={22}
              color={colorConfig.gray}
              style={{
                padding: 3,
                backgroundColor: colorConfig.dark,
                elevation: 6,
                borderRadius: 14,
              }}
            />
            <Text>1</Text>
            <Entypo
              name="plus"
              size={22}
              color={colorConfig.gray}
              style={{
                padding: 3,
                backgroundColor: colorConfig.dark,
                elevation: 6,
                borderRadius: 14,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: fontConfig.medium,
              color: colorConfig.white,
            }}>
            {bagObj?.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BagCard;
