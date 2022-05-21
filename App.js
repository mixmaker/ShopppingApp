import { View, StatusBar } from 'react-native';
import React from 'react';
import AppStack from './src/navigation/AppStack';

const App = () => {
  return (
    // <SafeAreaView style={{flex:1, backgroundColor:'red'}}>
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" />
      <AppStack />
    </View>
    // </SafeAreaView>
  );
};

export default App;
