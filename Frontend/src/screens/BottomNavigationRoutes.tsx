import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import {Image} from 'react-native';

import CloverScreen from './CloverScreen';
import DiaryScreen from './DiaryScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import TarotScreen from './TarotScreen';
import WriteScreen from './WriteScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Diary = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiaryHome"
        component={DiaryScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/icons/home2.png')
              : require('../../assets/icons/home1.png');
          } else if (route.name === 'Diary') {
            iconName = focused
              ? require('../../assets/icons/diary2.png')
              : require('../../assets/icons/diary1.png');
          } else if (route.name === 'Tarot') {
            iconName = focused
              ? require('../../assets/icons/tarot2.png')
              : require('../../assets/icons/tarot1.png');
          } else if (route.name === 'Clover') {
            iconName = focused
              ? require('../../assets/icons/clover2.png')
              : require('../../assets/icons/clover1.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../../assets/icons/profile2.png')
              : require('../../assets/icons/profile1.png');
          }
          return (
            <Image source={iconName} style={{width: size, height: size}} />
          );
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Diary"
        component={Diary}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tarot"
        component={TarotScreen}
        listeners={({navigation}) => ({
          tabPress: e => {
            navigation.navigate('Tarot', {screen: 'main'});
          },
        })}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Clover"
        component={CloverScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return <MyTabs />;
}
