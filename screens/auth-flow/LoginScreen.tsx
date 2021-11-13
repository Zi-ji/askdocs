import * as React from 'react';
import { StyleSheet, View as DefaultView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, useThemeColor, View as ThemedView } from '../../components/Themed';
import BackButton from '../../components/BackButton';
import { AuthFlowScreenProps } from '../../types';

export default function LoginScreen({ navigation }: AuthFlowScreenProps<'Welcome'>) {
  const topBackground = useThemeColor({}, 'primary');
  const titleColor = useThemeColor({}, 'title');

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: topBackground }]}
      edges={['top', 'left', 'right']}
    >
      {/* Top half of the screen */}
      <DefaultView style={[styles.top]}>
        <Text style={[styles.title, { color: titleColor }]}>
          {'Sign in to\n'}
          <Text style={{ fontWeight: 'bold', color: titleColor }}>AskDocs</Text>
        </Text>
      </DefaultView>

      {/* Bottom half of the screen */}
      <ThemedView style={styles.bottom}>
        <DefaultView style={styles.inputContainer}>
          <BackButton onPress={() => navigation.navigate('Welcome')} />

          {/* To do */}
          <Text>To do</Text>
        </DefaultView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
    fontWeight: '500'
  },
  top: {
    flex: 4,
    marginLeft: 40,
    justifyContent: 'center'
  },
  bottom: {
    flex: 6,
    alignItems: 'stretch',
    borderRadius: 30
  },
  inputContainer: {
    padding: 20
  }
});
