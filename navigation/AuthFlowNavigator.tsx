import * as React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { AuthFlowParamList } from '../types';
import WelcomeScreen from '../screens/auth-flow/WelcomeScreen';
import LoginScreen from '../screens/auth-flow/LoginScreen';
import RegisterScreen from '../screens/auth-flow/RegisterScreen';
import ResetPasswordScreen from '../screens/auth-flow/ResetPasswordScreen';
import ResetPasswordVScreen from '../screens/auth-flow/ResetPasswordVScreen';
import ResetPasswordFinalScreen from '../screens/auth-flow/ResetPasswordFinalScreen';

const Stack = createStackNavigator<AuthFlowParamList>();

export default function AuthFlowNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalFadeTransition
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ResetPasswordV" component={ResetPasswordVScreen} />
      <Stack.Screen name="ResetPasswordFinal" component={ResetPasswordFinalScreen} />
    </Stack.Navigator>
  );
}
