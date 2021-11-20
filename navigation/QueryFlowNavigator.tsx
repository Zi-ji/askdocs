import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewQueryScreen from '../screens/query-flow/NewQueryScreen';
import CustomHeader from '../components/CustomHeader';
import { QueryFlowParamList } from '../types';
import AnalyseScreen from '../screens/query-flow/AnalyseScreen';
import FoundDoctorScreen from '../screens/query-flow/FoundDoctorScreen';
import WaitingScreen from '../screens/query-flow/WaitingScreen';
import ChatScreen from '../screens/query-flow/ChatScreen';

const Stack = createNativeStackNavigator<QueryFlowParamList>();

export default function QueryFlowNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewQuery"
        component={NewQueryScreen}
        options={{
          title: 'New Query',
          gestureEnabled: false,
          header: ({ navigation, route, options }) => {
            return (
              <CustomHeader
                backOnPress={navigation.goBack}
                title={options.title ? options.title : route.name}
                rightIconName="ellipsis"
                highlight={false}
                rightOnPress={() => {}}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="Analyse"
        component={AnalyseScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="FoundDoctor"
        component={FoundDoctorScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return (
              <CustomHeader
                backOnPress={() => navigation.navigate('HomeScreen')}
                title={options.title}
                highlight={false}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="Waiting"
        component={WaitingScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return (
              <CustomHeader
                backOnPress={() => navigation.navigate('HomeScreen')}
                title={'Chest Pain'}
                highlight={false}
                rightIconName="ellipsis"
                rightOnPress={() => {}}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return (
              <CustomHeader
                backOnPress={() => navigation.navigate('HomeScreen')}
                title={'Chest Pain'}
                highlight={false}
                rightIconName="ellipsis"
                rightOnPress={() => {}}
              />
            );
          }
        }}
      />
    </Stack.Navigator>
  );
}
