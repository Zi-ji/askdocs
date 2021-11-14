import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View as DefaultView,
  View
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useThemeColor, View as ThemedView } from '../../components/Themed';
import BackButton from '../../components/BackButton';
import StyledTextInput from '../../components/StyledTextInput';
import { AuthFlowScreenProps } from '../../types';
import ActionButton from '../../components/ActionButton';
import Colors from '../../constants/Colors';

export default function ResetPasswordVScreen({ navigation }: AuthFlowScreenProps<'Welcome'>) {
  const topBackground = useThemeColor({}, 'primary');
  const titleColor = useThemeColor({}, 'title');
  const insets = useSafeAreaInsets();

  const [verificationCode, setVerificationCode] = React.useState('');
  const [keyboardStatus, setKeyboardStatus] = React.useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={[styles.container, { backgroundColor: topBackground }]}
        edges={['top', 'left', 'right']}
      >
        {/* Top half of the screen */}
        <DefaultView style={[styles.top]}>
          <Text style={[styles.title, { color: titleColor }]}>
            {'Please enter the Verification Code\n'}
            {'You have received at:\n'}
            {'\n'}
            {'demo@demo.com\n'}
          </Text>
        </DefaultView>

        {/* Bottom half of the screen */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 6 }}
          keyboardVerticalOffset={-2 * insets.bottom}
        >
          <ThemedView style={[styles.bottom]}>
            {keyboardStatus ? (
              <View style={{ height: 2 * insets.bottom }} />
            ) : (
              <BackButton onPress={() => navigation.goBack()} />
            )}

            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
                marginRight: 15,
                marginBottom: insets.bottom * 2
              }}
            >
              <StyledTextInput
                value={verificationCode}
                onChangeText={(value) => setVerificationCode(value)}
                placeholder="Verification Code"
                statusUpdater={setKeyboardStatus}
              />
              <ActionButton
                text={'Resend Code'}
                onPress={() => {}}
                style={{ marginTop: 40 }}
                fontStyle={{ color: Colors.light.primary }}
              />
            </View>
          </ThemedView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  inputContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between'
  }
});
