import * as React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View as DefaultView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';

import { useThemeColor } from '../../components/Themed';
import SmallButton from '../../components/SmallButton';
import NextButton from '../../components/NextButton';
import StyledTextInput from '../../components/StyledTextInput';
import useCamera from '../../hooks/useCamera';
import { QueryFlowScreenProps } from '../../types';

export default function NewQueryScreen({ navigation }: QueryFlowScreenProps<'NewQuery'>) {
  const [input, setInput] = React.useState<string>('');
  const background = useThemeColor({}, 'background');
  const { image, pickImageFromLib, takeImageFromCam } = useCamera();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={135}
        style={[styles.container, { backgroundColor: background }]}
      >
        <StyledTextInput
          value={input}
          placeholder="I feel..."
          multiline={true}
          onChangeText={(text) => setInput(text)}
          style={styles.input}
        />
        <DefaultView style={styles.bottomRow}>
          <SmallButton
            onPress={() => takeImageFromCam()}
            iconName="camera-alt"
            style={styles.smallBtn}
          />
          <SmallButton onPress={() => {}} iconName="photo-library" style={styles.smallBtn} />
          <SmallButton onPress={() => {}} iconName="history" style={styles.smallBtn} />
          <NextButton text="Next" onPress={() => {}} />
        </DefaultView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    flex: 80,
    marginBottom: 30
  },
  bottomRow: {
    flexDirection: 'row',
    flex: 15
  },
  camera: {
    flex: 1
  },
  smallBtn: {
    marginRight: 30
  }
});
