import { MaterialIcons } from '@expo/vector-icons';
import { Text } from '../components/Themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HistoryNavigator from './HistoryNavigator';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/history/HistoryScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ProfileNavigator from './ProfileNavigator';
import { RootTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarStyle: {
          height: 105,
          paddingHorizontal: 15
        },
        headerShown: false
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 10,
                color: focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault,
                opacity: focused ? 1 : 0.5
              }}
            >
              Home
            </Text>
          )
        }}
      />
      <BottomTab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 10,
                color: focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault,
                opacity: focused ? 1 : 0.5
              }}
            >
              History
            </Text>
          )
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="supervised-user-circle" color={color} />,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                fontSize: 10,
                color: focused
                  ? Colors[colorScheme].tabIconSelected
                  : Colors[colorScheme].tabIconDefault,
                opacity: focused ? 1 : 0.5
              }}
            >
              Profile
            </Text>
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={30} style={{ marginBottom: -15, marginLeft: 1 }} {...props} />;
}
