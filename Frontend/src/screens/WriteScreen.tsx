import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

function WriteScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="제목을 입력하세요."
        style={styles.titleInput}
      />
      <TextInput
        multiline
        value={body}
        onChangeText={setBody}
        placeholder="당신의 오늘을 기록해보세요."
        style={styles.bodyInput}
      />
      <Button
        title="저장"
        onPress={() => {
          /* 저장 로직 */
        }}
      />
      <Button title="닫기" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  // 스타일 정의
});

export default WriteScreen;
