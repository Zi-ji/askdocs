import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HistoryScreen from '../screens/history/HistoryScreen';
import { HistoryParamList } from '../types';

const Stack = createNativeStackNavigator<HistoryParamList>();

export default function HistoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}