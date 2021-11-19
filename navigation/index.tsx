import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { CustomDarkTheme } from '../components/Themed';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import QueryFlowNavigator from './QueryFlowNavigator';
import HistoryNavigator from './HistoryNavigator';
import ProfileNavigator from './ProfileNavigator';
import AuthFlowNavigator from './AuthFlowNavigator';

import { BottomTabNavigator } from './BottomTabNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? CustomDarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="AuthFlow" component={AuthFlowNavigator} /> */}
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
      <Stack.Screen name="QueryFlow" component={QueryFlowNavigator} />
      <Stack.Screen name="History" component={HistoryNavigator} />
      <Stack.Screen name="Profile" component={ProfileNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
