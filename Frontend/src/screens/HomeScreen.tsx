import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/BackgroundImage.png')}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={styles.logocontainer}>
        <Image
          source={require('../../assets/images/TaLog_logo.png')}
          style={styles.logo}
        />
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.logocontainer}>
          Home 화면은 2차 버전 때 구현할 예정
        </Text>
        {/* 이하 다른 요소들을 여기에 추가 */}
        {/* 예: <Text style={styles.someTextStyle}>텍스트</Text> */}
        {/* 이미지 추가 예: <Image source={require('./path-to-image.jpg')} style={styles.someImageStyle} /> */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    textAlign: 'center',
  },
  logocontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 124,
    height: 70,
    resizeMode: 'contain',
  },
  iPhone14: {
    position: 'absolute',
    width: 393,
    height: 624,
    left: 0,
    top: 132,
    overflowY: 'scroll',
  },
  whiteTexture2: {
    position: 'absolute',
    width: 393,
    height: 852,
    left: 0,
    top: 852,
    backgroundColor: '#FFF', // 실제 이미지를 사용하려면 여기를 수정하세요
  },
  // 여기에 다른 스타일을 추가하세요
});

export default App;
