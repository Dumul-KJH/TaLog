import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CloverScreen = () => {
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
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}>
        <Text style={styles.topName}>행운 상점</Text>
      </View>
      <View style={{flex: 4, alignItems: 'center'}}>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.textPrice}>1,000원</Text>
            <Text style={styles.textAmount}>X 10</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.textPrice}>1,800원</Text>
            <Text style={styles.textAmount}>X 20</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.textPrice}>2,400원</Text>
            <Text style={styles.textAmount}>X 30</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.textPrice}>3,000원</Text>
            <Text style={styles.textAmount}>X 50</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.textPrice}>5,000원</Text>
            <Text style={styles.textAmount}>X 100</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 332,
    height: 70,
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    borderColor: 'transparent',
    marginVertical: 5,
  },
  topName: {
    fontFamily: 'Inter', // 폰트는 앱에 해당 폰트가 포함되어 있어야 적용됩니다.
    fontSize: 35,
    lineHeight: 42,
    color: '#000000',
    marginBottom: 35,
    marginLeft: 24,
  },
  button: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: 39,
    height: 39,
    left: 24,
    top: 16,
  },
  textPrice: {
    position: 'absolute',
    right: 24,
    top: 27,
    fontSize: 15,
    lineHeight: 16,
    color: '#000',
  },
  textAmount: {
    position: 'absolute',
    left: 73,
    top: 24,
    fontSize: 20,
    lineHeight: 21,
    color: '#000',
  },
});

export default CloverScreen;
