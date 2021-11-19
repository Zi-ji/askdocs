import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Text } from '../../components/Themed';
import { useThemeColor } from '../../components/Themed';
import StyledTextInput from '../../components/StyledTextInput';
import { QueryFlowScreenProps } from '../../types';

export default function NewQueryScreen({}: QueryFlowScreenProps<'NewQuery'>) {
  const [input, setInput] = React.useState<string>('');

  const background = useThemeColor({}, 'background');
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <StyledTextInput
        value={input}
        placeholder="I feel..."
        multiline={true}
        onChangeText={(text) => setInput(text)}
        style={styles.input}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 0
  },
  input: {
    flex: 1
  }
});
