import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthFlowParamList } from '../types';
import WelcomeScreen from '../screens/auth-flow/WelcomeScreen';

const Stack = createNativeStackNavigator<AuthFlowParamList>();

export default function AuthFlowNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}