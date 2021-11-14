import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
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

export default function ResetPasswordScreen({
  navigation,
  route
}: AuthFlowScreenProps<'ResetPassword'>) {
  const topBackground = useThemeColor({}, 'primary');
  const titleColor = useThemeColor({}, 'title');
  const insets = useSafeAreaInsets();

  const [login, setLogin] = React.useState('');
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
            Please enter the {route.params.type === 'email' ? 'email address' : 'phone number'} you
            used to register.
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
              <ActionButton
                text={'Continue'}
                onPress={() => {
                  if (login !== '') {
                    navigation.navigate('ResetPasswordV', { ...route.params, value: login });
                  } else {
                    alert(
                      `Please enter your ${
                        route.params.type === 'email' ? 'email address' : 'phone number'
                      }.`
                    );
                  }
                }}
                style={{ marginTop: 40 }}
                fontStyle={{ color: Colors.light.primary }}
              />
              <TouchableOpacity
                style={{ padding: 30, paddingBottom: 0 }}
                onPress={() => {
                  navigation.navigate('ResetPassword', {
                    type: route.params.type !== 'email' ? 'email' : 'phone'
                  });
                }}
              >
                <Text style={{ fontSize: 15, opacity: 0.5 }}>
                  Recover using {route.params.type !== 'email' ? 'email address' : 'phone number'}
                </Text>
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
    fontSize: 24,
    fontWeight: '500',
    marginRight: 60
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
