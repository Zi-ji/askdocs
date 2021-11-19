import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewQueryScreen from '../screens/query-flow/NewQueryScreen';
import CustomHeader from '../components/CustomHeader';
import { QueryFlowParamList } from '../types';

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
    </Stack.Navigator>
  );
}
