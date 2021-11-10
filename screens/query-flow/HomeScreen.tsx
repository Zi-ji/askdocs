import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';

export default function HomeScreen({ navigation }: QueryFlowScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To do: HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
