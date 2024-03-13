import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = useRef(null);

  const handleSubmitPress = () => {
    // setErrortext('');
    // if (!userId || !userPassword) {
    //   setErrortext('아이디와 비밀번호를 입력해주세요');
    //   return;
    // }
    // setLoading(true);
    // // Convert form data to URL encoded string
    // let formBody = `userId=${userId}&userPassword=${userPassword}`;
    // fetch('http://localhost:3001/api/user/login', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     setLoading(false);
    //     console.log(responseJson);
    //     if (responseJson.status === 'success') {
    //       AsyncStorage.setItem('user_id', responseJson.data.stu_id);
    //       console.log(responseJson.data.stu_id);
    //       navigation.replace('BottomNavigationRoutes');
    //     } else {
    //       setErrortext('아이디와 비밀번호를 다시 확인해주세요');
    //       console.log('Please check your id or password');
    //     }
    //   })
    //   .catch(error => {
    //     setLoading(false);
    //     console.error(error);
    //   });
    navigation.replace('BottomNavigationRoutes');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/BackgroundImage.png')}
        style={styles.image}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <Image source={require('../../assets/images/TaLog_logo.png')} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder={'ID / E-mail'}
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={userId => setUserId(userId)}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            blurOnSubmit={false}
          />
          <TextInput
            style={styles.textInput}
            ref={passwordInputRef}
            placeholder={'Password'}
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={userPassword => setUserPassword(userPassword)}
            secureTextEntry={true}
            returnKeyType="go"
            onSubmitEditing={handleSubmitPress}
          />
        </View>
        <View style={styles.inputContainer}>
          {errortext !== '' && (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          )}
          {/* 회원가입 Button */}
          <TouchableOpacity
            style={styles.registerButton}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerButtonText}>회원가입</Text>
          </TouchableOpacity>

          {loading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EDEAE5',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 210,
    height: 42,
    backgroundColor: 'rgba(136, 136, 136, 0.3)',
    borderRadius: 21,
    marginVertical: 10, // 입력창 사이의 간격 조절
    paddingHorizontal: 10, // 텍스트와 입력창 경계 사이의 간격
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 15,
    lineHeight: 22,
    fontFamily: 'Noto Sans KR',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 10,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  registerButton: {
    marginVertical: 10,
    height: 30,
    justifyContent: 'center',
  },
  registerButtonText: {
    fontFamily: 'Noto Sans KR',
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
