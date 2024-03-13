import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ScrollView} from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DiaryScreen = () => {
  const [selected, setSelected] = useState('');
  const [showDiaryModal, setShowDiaryModal] = useState(false); // 일기 모달 표시 여부
  const [todayTarotModal, setTodayTarotModal] = useState(false); // 오늘의 타로 모달 표시 여부
  const [qnaTarotModal, setQnaTarotModal] = useState(false); // 타로 질문 모달 표시 여부
  const navigation = useNavigation();

  const onDayPress = day => {
    setSelected(day.dateString);
    setShowDiaryModal(true); // 날짜 클릭 시 오버레이 표시
  };

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
        <Text style={styles.topName}>다이어리</Text>
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
      <View style={{flex: 4}}>
        <Calendar
          onDayPress={onDayPress}
          theme={{
            calendarBackground: 'transparent',
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
          style={{width: '100%'}}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showDiaryModal}
        onRequestClose={() => setShowDiaryModal(false)}>
        <View style={styles.centeredView}>
          <ImageBackground
            source={require('../../assets/images/BackgroundImage.png')}
            style={styles.modalView}>
            <View style={styles.modalTitle}>
              <Text
                style={{
                  flex: 1,
                  textAlignVertical: 'top',
                  fontSize: 17,
                  fontFamily: 'Pretendard',
                  color: 'gray',
                }}>
                {selected}의 일기
              </Text>
              <TouchableOpacity
                onPress={() => setShowDiaryModal(false)}
                style={styles.closeButton}>
                <Image
                  source={require('../../assets/icons/close2.png')}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContents}>
              <ScrollView>
                <Text
                  style={{
                    flex: 1,
                    textAlignVertical: 'top',
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                    color: 'black',
                  }}>
                  개강 첫째 주가 후다닥 지나갔다. 방학 때 분명히 이번 학기는
                  다르게 보낼거라고 다짐했었는데... 뭔가 벌써 많이 바쁘다.
                  수업만으로도 충분히 바쁜데 창업 대회를 잘 마칠 수 있을지
                  걱정이 된다. 하지만 이것저것 조금씩 해내다보면 어느새 잘
                  굴러가고 있겠지? 긍정적으로 생각해야겠다. 9월이 시작되었는데도
                  아직 많이 덥다. 일교차가 커서 감기 걸리기 딱 좋다. 이번 달
                  목표는 건강하게 살기!
                </Text>
              </ScrollView>
            </View>
            <View style={styles.modalButons}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button_2}
                  onPress={() => {
                    setTodayTarotModal(true);
                  }}>
                  <Text style={styles.buttonText}>이 날의 운세는?</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button_2}
                  onPress={() => {
                    setQnaTarotModal(true);
                  }}>
                  <Text style={styles.buttonText}>이 날의 타로 상담</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={todayTarotModal}
        onRequestClose={() => setTodayTarotModal(false)}>
        <View style={styles.centeredView}>
          <ImageBackground
            source={require('../../assets/images/BackgroundImage.png')}
            style={styles.modalView_fullscreen}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => setTodayTarotModal(false)}>
                  <Image
                    source={require('../../assets/icons/close.png')}
                    style={{width: 40, height: 40, marginRight: 18}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 9,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/images/cards/1.png')}
                  style={{width: 167, height: 282}}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 70,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  fontFamily: 'Pretendard',
                  color: 'black',
                }}>
                달
              </Text>
              <ScrollView style={{width: '80%', marginTop: 10}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                    color: 'black',
                  }}>
                  뭔가 시끄러운 상황이 벌어지고 있음을 암시합니다. 달은 어두운
                  밤을 밝히는 유일한 빛입니다. 시끄러운 상황이 모두 나만을
                  바라보고 있군요. 내키지 않은 일을 해야 하는 경우가 생깁니다.
                  마음은 힘들지만 이를 다 밝힐 수도 없네요. 그러나 사람들이 나를
                  필요로 하기에 마음이 무거운 하루가 됩니다.
                </Text>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={qnaTarotModal}
        onRequestClose={() => setQnaTarotModal(false)}>
        <View style={styles.centeredView}>
          <ImageBackground
            source={require('../../assets/images/BackgroundImage.png')}
            style={styles.modalView_fullscreen}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity onPress={() => setQnaTarotModal(false)}>
                  <Image
                    source={require('../../assets/icons/close.png')}
                    style={{width: 40, height: 40, marginRight: 18}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 9,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Image
                  source={require('../../assets/images/cards/1.png')}
                  style={{width: 86, height: 145, margin: 5}}
                />
                <Image
                  source={require('../../assets/images/cards/1.png')}
                  style={{width: 86, height: 145, margin: 5}}
                />
                <Image
                  source={require('../../assets/images/cards/1.png')}
                  style={{width: 86, height: 145, margin: 5}}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 70,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: 'Pretendard',
                  color: 'black',
                }}>
                {'Q. 시험을 앞두고 있는데,\n 마지막 준비를 어떻게 할까?'}
              </Text>
              <ScrollView style={{width: '80%', marginVertical: 10}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                    color: 'black',
                  }}>
                  다가올 학기를 위해서 방학동안 열심히 준비하셨군요! 열심히
                  준비한만큼 자신이 넘치는 상태입니다. 하지만, 자신감과 자만심을
                  구별할 줄 알아야 하겠습니다. 미래에는 예상하지 못한 부분에서
                  새로운 일이 발생할 가능성이 보이네요. 창업을 시작할 때는 모든
                  것을 처음부터 조율해야 하므로 고려해야 할 사항이 매우
                  다양합니다. 이 고려사항들을 하나씩 꼼꼼히 살피는 것보다는, 한
                  발자국 떨어져서 침착히 전체를 살피는 것이 좋겠습니다. 주변
                  환경이 우령을 도와주지 않는다고 느낄 수 있습니다. 심지어,
                  가까운 시일 내에 조금 힘든 시기를 보내게 됩니다. 예를 들면,
                  투자자들을 설득하는 과정이 순탄치 않을 수 있겠군요. 하지만,
                  지금 우령이 가진 긍정적인 마음을 잘 유지해나간다면, 틀림없이
                  잘 이겨낼 수 있을 것입니다.
                </Text>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Write')}>
        <Image source={require('../../assets/icons/pencil.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // 반투명 배경
  },
  modalView: {
    width: screenWidth, // 화면 너비의 50%
    height: screenHeight * 0.5, // 화면 높이의 50%
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
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
  modalView_fullscreen: {
    width: screenWidth * 0.95,
    height: screenHeight * 0.66,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    paddingTop: 20,
    // alignItems: 'center', // 내부 항목 가운데 정렬
    justifyContent: 'center', // 세로 방향 가운데 정렬
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#693939',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  editorBlock: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // 배경색 설정
  },
  titleInput: {
    borderBottomWidth: 2,
    borderColor: '#0f4c75', // 제목 입력 필드의 테두리 색상
    padding: 10,
    fontSize: 20, // 글씨 크기
    marginBottom: 20, // 다음 요소와의 간격
    color: '#333', // 글씨 색상
    minHeight: 100,
  },
  bodyInput: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    borderColor: '#0f4c75',
    borderWidth: 2, // 테두리 두께
    borderRadius: 10, // 테두리 둥글기
    color: '#333', // 글씨 색상
    backgroundColor: '#eef9f9', // 본문
    minHeight: 100,
  },
  container: {
    width: 126,
    height: 45,
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    borderColor: 'transparent',
    marginBottom: 35,
    marginRight: 18,
  },
  buttonContainer: {
    width: 160,
    height: 48,
    borderRadius: 8,
    borderColor: '#000000',
    borderWidth: 1,
    margin: 10,
  },
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
  modalTitle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalContents: {
    flex: 8,
    marginVertical: 14,
  },
  modalButons: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Interstate Mono - Lgt',
    fontSize: 13,
    color: '#000000',
  },
});

export default DiaryScreen;
