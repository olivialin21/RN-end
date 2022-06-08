import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorMode } from 'native-base';

import RentScreen from '../screens/RentScreen';
import ReturnScreen from '../screens/ReturnScreen';
import StarScreen from '../screens/StarScreen';
import StarMapScreen from '../screens/StarMapScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DisplaySettingsScreen from '../screens/DisplaySettingsScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';

const Stack = createNativeStackNavigator();

export const RentStack = ({ navigation }) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Rent"
        component={RentScreen}
        options={{
          title: "借車",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? colors.yellow2 : colors.gray2,
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            Platform.OS == 'ios' ?
              <></> :
              <MaterialCommunityIcons
                name={'menu'}
                color={colorMode == 'light' ? 'black' : 'white'}
                size={20}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20 }}
              />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export const ReturnStack = ({ navigation }) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="return"
        component={ReturnScreen}
        options={{
          title: "還車",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? colors.yellow2 : colors.gray2,
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            Platform.OS == 'ios' ?
              <></> :
              <MaterialCommunityIcons
                name={'menu'}
                color={colorMode == 'light' ? 'black' : 'white'}
                size={20}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20 }}
              />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export const StarStack = ({ navigation }) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="star"
        component={StarScreen}
        options={{
          title: "收藏",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? colors.yellow2 : colors.gray2,
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            Platform.OS == 'ios' ?
              <></> :
              <MaterialCommunityIcons
                name={'menu'}
                color={colorMode == 'light' ? 'black' : 'white'}
                size={20}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20 }}
              />
          ),
        }}
      />
      <Stack.Screen
        name="StarMap"
        component={StarMapScreen}
        options={({ route }) => ({
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          title: route.params.StationName.Zh_tw,
          headerStyle: {
            backgroundColor: colorMode == 'light' ? colors.yellow2 : colors.gray2,
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
    </Stack.Navigator>
  );
}

export const SettingsStack = ({ navigation }) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "設定",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? colors.yellow2 : colors.gray2,
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            Platform.OS == 'ios' ?
              <></> :
              <MaterialCommunityIcons
                name={'menu'}
                color={colorMode == 'light' ? 'black' : 'white'}
                size={20}
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 20 }}
              />
          ),
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingsScreen}
        options={{
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          title: "顯示設定",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? colors.yellow2 : colors.gray2,
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{
          headerTintColor: colorMode == 'light' ? 'black' : 'white',
          title: "帳號設定",
          headerStyle: {
            backgroundColor: colorMode == 'light' ? colors.yellow2 : colors.gray2,
          },
          headerTitleStyle: {
            color: colorMode == 'light' ? 'black' : 'white',
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}