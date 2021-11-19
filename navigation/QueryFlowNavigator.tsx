import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewQueryScreen from '../screens/query-flow/NewQueryScreen';
import CustomHeader from '../components/CustomHeader';
import { QueryFlowParamList } from '../types';
import AnalyseScreen from '../screens/query-flow/AnalyseScreen';

const Stack = createNativeStackNavigator<QueryFlowParamList>();

export default function QueryFlowNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewQuery"
        component={NewQueryScreen}
        options={{
          title: 'New Query',
          header: ({ navigation, route, options }) => {
            return (
              <CustomHeader
                backOnPress={navigation.goBack}
                title={options.title ? options.title : route.name}
                rightIconName="ellipsis"
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
    </Stack.Navigator>
  );
}
