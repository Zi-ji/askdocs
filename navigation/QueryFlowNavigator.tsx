import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewQueryScreen from '../screens/query-flow/NewQueryScreen';
import CustomHeader from '../components/CustomHeader';
import { QueryFlowParamList } from '../types';
import AnalyseScreen from '../screens/query-flow/AnalyseScreen';
import FoundDoctorScreen from '../screens/query-flow/FoundDoctorScreen';
import WaitingScreen from '../screens/query-flow/WaitingScreen';
import ChatScreen from '../screens/query-flow/ChatScreen';
import DrProfileScreen from '../screens/query-flow/DrProfileScreen';
import DrReviewScreen from '../screens/query-flow/DrReviewScreen';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator<QueryFlowParamList>();

export default function QueryFlowNavigator() {
  const { showActionSheetWithOptions } = useActionSheet();
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
                rightOnPress={() => {
                  showActionSheetWithOptions(
                    {
                      options: [
                        'Cancel',
                        'Request Video Call',
                        'Leave a Review',
                        'End Query',
                        'Delete Chat'
                      ],
                      cancelButtonIndex: 0,
                      destructiveButtonIndex: [3, 4],
                      title: 'What would you like to do?'
                    },
                    (buttonIndex) => {
                      if (buttonIndex === 1) {
                        alert('Not implemented - this is where the user will call the doctor');
                      } else if (buttonIndex === 2) {
                        navigation.navigate('DrReview');
                      } else if (buttonIndex === 3 || buttonIndex === 4) {
                        Alert.alert('Are you sure?', 'This action cannot be undone', [
                          {
                            text: 'Cancel',
                            onPress: () => {},
                            style: 'cancel'
                          },
                          {
                            text: 'Yes',
                            onPress: () => navigation.navigate('HomeScreen'),
                            style: 'destructive'
                          }
                        ]);
                      }
                    }
                  );
                }}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="DrProfile"
        component={DrProfileScreen}
        options={{
          title: "Doctor's Profile",
          header: ({ navigation, route, options }) => {
            return (
              <CustomHeader
                backOnPress={() => navigation.goBack()}
                title={options.title}
                highlight={false}
                rightIconName="ellipsis"
                rightOnPress={() => {}}
              />
            );
          }
        }}
      />
      <Stack.Screen
        name="DrReview"
        component={DrReviewScreen}
        options={{
          header: ({ navigation, route, options }) => {
            return (
              <CustomHeader
                backOnPress={() => navigation.goBack()}
                highlight={false}
                rightIconName="checkmark"
                rightOnPress={() => navigation.goBack()}
              />
            );
          }
        }}
      />
    </Stack.Navigator>
  );
}
