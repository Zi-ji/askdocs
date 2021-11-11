import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthFlowParamList } from '../types';
import WelcomeScreen from '../screens/auth-flow/WelcomeScreen';
import LoginScreen from '../screens/auth-flow/LoginScreen';

const Stack = createStackNavigator<AuthFlowParamList>();

export default function AuthFlowNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ animationEnabled: false }} />
    </Stack.Navigator>
  );
}