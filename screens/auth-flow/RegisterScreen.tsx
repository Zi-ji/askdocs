import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View as DefaultView,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useThemeColor, View as ThemedView } from '../../components/Themed';
import BackButton from '../../components/BackButton';
import StyledTextInput from '../../components/StyledTextInput';
import { AuthFlowScreenProps } from '../../types';
import ActionButton from '../../components/ActionButton';
import Colors from '../../constants/Colors';

export default function RegisterScreen({ navigation }: AuthFlowScreenProps<'Welcome'>) {
  const topBackground = useThemeColor({}, 'primary');
  const titleColor = useThemeColor({}, 'title');
  const insets = useSafeAreaInsets();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [dob, setDob] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
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
            {'Register for\n'}
            <Text style={{ fontWeight: 'bold', color: titleColor }}>AskDocs</Text>
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
            <ScrollView>
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
                  value={firstName}
                  onChangeText={(value) => setFirstName(value)}
                  placeholder="First Name"
                  style={{ marginTop: 20 }}
                  type="email-address"
                  statusUpdater={setKeyboardStatus}
                />
                <StyledTextInput
                  value={lastName}
                  onChangeText={(value) => setLastName(value)}
                  placeholder="Last Name (Optional)"
                  style={{ marginTop: 20 }}
                  type="email-address"
                  statusUpdater={setKeyboardStatus}
                />
                <StyledTextInput
                  value={gender}
                  onChangeText={(value) => setGender(value)}
                  placeholder="Gender (Optional)"
                  style={{ marginTop: 20 }}
                  statusUpdater={setKeyboardStatus}
                />
                <StyledTextInput
                  value={dob}
                  onChangeText={(value) => setDob(value)}
                  placeholder="Date of Birth (Optional)"
                  style={{ marginTop: 20 }}
                  statusUpdater={setKeyboardStatus}
                />
                <StyledTextInput
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  placeholder="Email"
                  style={{ marginTop: 20 }}
                  type="email-address"
                  statusUpdater={setKeyboardStatus}
                />
                <StyledTextInput
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  placeholder="Password"
                  style={{ marginTop: 20 }}
                  hidden
                  statusUpdater={setKeyboardStatus}
                />
                <StyledTextInput
                  value={repeatPassword}
                  onChangeText={(value) => setRepeatPassword(value)}
                  placeholder="Confirm Password"
                  style={{ marginTop: 20 }}
                  hidden
                  statusUpdater={setKeyboardStatus}
                />
                <ActionButton
                  text={'Sign In'}
                  onPress={() => {}}
                  style={{ marginTop: 40 }}
                  fontStyle={{ color: Colors.light.primary }}
                />
              </View>
            </ScrollView>
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
