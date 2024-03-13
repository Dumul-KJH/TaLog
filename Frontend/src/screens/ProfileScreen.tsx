import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/BackgroundImage.png')}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile 화면은 2차 버전 때 구현할 예정</Text>
      </View>
    </ImageBackground>
  );
}
