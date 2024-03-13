import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import axiosClient from '../Auth/axiosClient';

function TarotMainScreen({onChangeScreen}) {
  const navigation = useNavigation();
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
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text style={styles.topName}></Text>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Clover')}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.text}>70</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={{flex: 1, marginBottom: 20}}>
          <Image source={require('../../assets/images/Character.png')} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            source={require('../../assets/images/bubble.png')}
            style={{
              height: 61,
              width: 339,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#000',
                textAlign: 'center',
              }}>
              보고싶은 타로를 골라주세요!
            </Text>
          </ImageBackground>
        </View>
        <View style={{flex: 1}} />
        <View style={{flex: 2}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={onChangeScreen}
              style={{
                width: 142, // 너비
                height: 40, // 높이
                justifyContent: 'center', // 텍스트를 버튼 중앙에 배치
                alignItems: 'center', // 텍스트를 버튼 중앙에 배치
                borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 7,
              }}>
              <Text
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: 20,
                  color: '#000000',
                  textAlign: 'center',
                }}>
                오늘의 운세 🍀
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onChangeScreen}
              style={{
                width: 100, // 너비
                height: 40, // 높이
                justifyContent: 'center', // 텍스트를 버튼 중앙에 배치
                alignItems: 'center', // 텍스트를 버튼 중앙에 배치
                borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 7,
                marginHorizontal: 13,
              }}>
              <Text
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: 20,
                  color: '#000000',
                  textAlign: 'center',
                }}>
                연애운 💕
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onChangeScreen}
              style={{
                width: 100, // 너비
                height: 40, // 높이
                justifyContent: 'center', // 텍스트를 버튼 중앙에 배치
                alignItems: 'center', // 텍스트를 버튼 중앙에 배치
                borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 7,
              }}>
              <Text
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: 20,
                  color: '#000000',
                  textAlign: 'center',
                }}>
                금전운 💵
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={onChangeScreen}
              style={{
                width: 100, // 너비
                height: 40, // 높이
                justifyContent: 'center', // 텍스트를 버튼 중앙에 배치
                alignItems: 'center', // 텍스트를 버튼 중앙에 배치
                borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 7,
              }}>
              <Text
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: 20,
                  color: '#000000',
                  textAlign: 'center',
                }}>
                학업운 📚
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onChangeScreen}
              style={{
                width: 100, // 너비
                height: 40, // 높이
                justifyContent: 'center', // 텍스트를 버튼 중앙에 배치
                alignItems: 'center', // 텍스트를 버튼 중앙에 배치
                borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 7,
                marginHorizontal: 13,
              }}>
              <Text
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: 20,
                  color: '#000000',
                  textAlign: 'center',
                }}>
                갈림길 👣
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onChangeScreen}
              style={{
                width: 100, // 너비
                height: 40, // 높이
                justifyContent: 'center', // 텍스트를 버튼 중앙에 배치
                alignItems: 'center', // 텍스트를 버튼 중앙에 배치
                borderColor: '#000000',
                borderWidth: 1,
                borderRadius: 7,
              }}>
              <Text
                style={{
                  fontFamily: 'Pretendard',
                  fontSize: 20,
                  color: '#000000',
                  textAlign: 'center',
                }}>
                기타 ➰
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 2}} />
      </View>
    </ImageBackground>
  );
}

function TartoqnaScreen({onChangeScreen}) {
  const navigation = useNavigation();
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
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text style={styles.topName}></Text>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Clover')}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.text}>70</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View style={{flex: 1, marginBottom: 20}}>
          <Image source={require('../../assets/images/Character.png')} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground
            source={require('../../assets/images/bubble.png')}
            style={{
              height: 61,
              width: 339,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: '#000',
                textAlign: 'center',
              }}>
              어떤 내용이 궁금하신가요?
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View
            style={{
              paddingHorizontal: 31, // 좌우 여백
              alignItems: 'flex-start',
            }}>
            <TextInput
              textAlign="center"
              placeholder="질문을 입력해주세요"
              placeholderTextColor="#000"
              returnKeyType="go"
              onSubmitEditing={onChangeScreen}
              style={{
                width: 337, // 너비
                height: 48, // 높이 (47.95를 48로 반올림)
                borderColor: '#000000', // 테두리 색상
                borderWidth: 1.5, // 테두리 두께
                borderRadius: 25, // 테두리 둥글기
                padding: 10,
                fontSize: 20,
              }}
            />
          </View>
        </View>
        <View style={{flex: 1}} />
      </View>
    </ImageBackground>
  );
}

function TarotCardScreen({onChangeScreen}) {
  const width = Dimensions.get('window').width;
  const navigation = useNavigation();
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
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <Text style={styles.topName}></Text>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Clover')}>
          <View style={styles.button}>
            <Image
              source={require('../../assets/icons/CloverIcon.png')}
              style={styles.logo}
            />
            <Text style={styles.text}>70</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <View style={{flex: 1, marginBottom: 20}}>
            <Image source={require('../../assets/images/Character.png')} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <ImageBackground
              source={require('../../assets/images/bubble2.png')}
              style={{
                height: 100,
                width: 339,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'center',
                }}>
                마음에 속으로 생각하며{'\n'}끌리는 카드를 골라주세요!
              </Text>
            </ImageBackground>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Carousel
            width={86}
            height={141}
            data={[...new Array(78).keys()]}
            scrollAnimationDuration={1000}
            // onSnapToItem={index => console.log('current index:', index)}
            renderItem={({index}) => (
              <TouchableOpacity
                style={{
                  width: 86,
                  height: 141,
                  borderWidth: 1,
                  justifyContent: 'center',
                }}
                onPress={onChangeScreen}>
                <Image
                  source={require('../../assets/images/cards/back.png')}
                  style={{width: 86, height: 141}}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

function TartoResultScreen({onChangeScreen}, {currentScreen}) {
  const navigation = useNavigation();
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
      <Pressable style={{flex: 1}} onPress={onChangeScreen}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          <Text style={styles.topName}></Text>
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Clover')}>
            <View style={styles.button}>
              <Image
                source={require('../../assets/icons/CloverIcon.png')}
                style={styles.logo}
              />
              <Text style={styles.text}>70</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../../assets/images/cards/1.png')}
            style={{width: 167, height: 282}}
          />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/Character.png')}
                style={{width: 60, height: 60, marginLeft: 20}}
              />
              <View style={{flex: 1}} />
            </View>
            <ImageBackground
              style={{
                flex: 4,
                width: 339,
                height: 101,
                alignItems: 'center',
                justifyContent: 'flex-end',
                alignSelf: 'center',
              }}
              source={require('../../assets/images/bubble3.png')}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#000',
                  textAlign: 'center',
                  flex: 1,
                  marginTop: 30,
                }}>
                타로 결과는 .....
              </Text>
              <View style={{flex: 1}} />
            </ImageBackground>
            <View style={{flex: 2}} />
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
}

const TarotScreen = ({route}) => {
  const [currentScreen, setCurrentScreen] = useState('main');
  useEffect(() => {
    if (route.params?.screen === 'main') {
      setCurrentScreen('main');
    }
  }, [route.params]);

  useEffect(() => {
    async function init() {
      try {
        const response = await axiosClient.get('/diary');
        console.log(response.data);
      } catch {
        console.log('error');
      }
    }
    init();
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {currentScreen === 'main' && (
        <TarotMainScreen onChangeScreen={() => setCurrentScreen('qna')} />
      )}
      {currentScreen === 'qna' && (
        <TartoqnaScreen onChangeScreen={() => setCurrentScreen('card')} />
      )}
      {currentScreen === 'card' && (
        <TarotCardScreen onChangeScreen={() => setCurrentScreen('result')} />
      )}
      {currentScreen === 'result' && (
        <TartoResultScreen onChangeScreen={() => setCurrentScreen('main')} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 18,
    top: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Pretended',
    fontSize: 20,
    lineHeight: 21,
    color: '#000000',
    textAlign: 'center',
    position: 'absolute',
    right: 22,
    top: 12,
  },
  container: {
    width: 126,
    height: 45,
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    borderColor: 'transparent',
    marginBottom: 35,
    marginRight: 18,
    marginTop: 77,
  },
  topName: {
    fontFamily: 'Inter', // 폰트는 앱에 해당 폰트가 포함되어 있어야 적용됩니다.
    fontSize: 35,
    lineHeight: 42,
    color: '#000000',
    marginBottom: 35,
    marginLeft: 24,
    flex: 3,
  },
});

export default TarotScreen;
