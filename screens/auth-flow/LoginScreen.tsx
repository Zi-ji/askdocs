import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View as DefaultView,
  View,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useThemeColor, View as ThemedView } from '../../components/Themed';
import BackButton from '../../components/BackButton';
import StyledTextInput from '../../components/StyledTextInput';
import { AuthFlowScreenProps } from '../../types';
import ActionButton from '../../components/ActionButton';
import Colors from '../../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation, route }: AuthFlowScreenProps<'Login'>) {
  const topBackground = useThemeColor({}, 'primary');
  const titleColor = useThemeColor({}, 'title');
  const insets = useSafeAreaInsets();

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
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
            {'Sign in to\n'}
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
                value={login}
                onChangeText={(value) => setLogin(value)}
                placeholder={route.params.type === 'email' ? 'Email Address' : 'Phone Number'}
                type={route.params.type === 'email' ? 'email-address' : 'phone-pad'}
                statusUpdater={setKeyboardStatus}
              />
              <StyledTextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Password"
                hidden
                style={{ marginTop: 20 }}
                statusUpdater={setKeyboardStatus}
              />
              <ActionButton
                text={'Sign In'}
                onPress={() => {
                  const storeData = async () => {
                    try {
                      await AsyncStorage.setItem('@logged_in', '1');
                    } catch (e) {
                      // saving error
                    }
                  };
                  storeData();
                  navigation.replace('Root');
                }}
                style={{ marginTop: 40 }}
                fontStyle={{ color: Colors.light.primary }}
              />
              <TouchableOpacity
                style={{ padding: 30, paddingBottom: 0 }}
                onPress={() => navigation.navigate('ResetPassword', route.params)}
              >
                <Text style={{ fontSize: 15, opacity: 0.5 }}>Reset Password</Text>
              </TouchableOpacity>
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
