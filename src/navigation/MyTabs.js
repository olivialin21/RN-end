import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../components/Icon.js'
import { useColorMode } from 'native-base';

// import NullScreen from '../screens/NullScreen';
import { RentStack, ReturnStack, StarStack, SettingsStack } from './MyStacks';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colorMode == 'light' ? 'white' : colors.black1 ,
        tabBarActiveTintColor: colorMode == 'light' ? colors.yellow2 : 'white',
        tabBarStyle: { backgroundColor: colorMode == 'light' ? colors.gray2 : colors.gray1 },
        tabBarLabelStyle: {
          fontSize: 14
        },
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="RentStack"
        component={RentStack}
        options={{
          headerShown: false,
          title: "借車",
          tabBarIcon: ({ color }) => (
            <Icon icon="rentBike" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ReturnStack"
        component={ReturnStack}
        options={{
          headerShown: false,
          title: "還車",
          tabBarIcon: ({ color }) => (
            <Icon icon="returnBike" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="StarStack"
        component={StarStack}
        options={{
          headerShown: false,
          title: "收藏",
          tabBarIcon: ({ color }) => (
            <Icon icon="starBike" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          title: "設定",
          tabBarIcon: ({ color }) => (
            <Icon icon="setting" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
