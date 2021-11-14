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

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 6;

export default function ResetPasswordVScreen({
  navigation,
  route
}: AuthFlowScreenProps<'ResetPasswordV'>) {
  const topBackground = useThemeColor({}, 'primary');
  const titleColor = useThemeColor({}, 'title');
  const inputBkgColor = useThemeColor({}, 'inputBackground');
  const insets = useSafeAreaInsets();

  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });
  const [keyboardStatus, setKeyboardStatus] = React.useState(false);

  const [secondsLeft, setSecondsLeft] = React.useState(60);
  const [isResendButtonDisabled, setIsResendButtonDisabled] = React.useState(false);

  const onResendPress = () => {
    setSecondsLeft(60);
    setIsResendButtonDisabled(true);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
      if (secondsLeft <= 1) {
        setIsResendButtonDisabled(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        style={[styles.container, { backgroundColor: topBackground }]}
        edges={['top', 'left', 'right']}
      >
        {/* Top half of the screen */}
        <DefaultView style={[styles.top]}>
          <Text style={[styles.title, { color: titleColor }]}>
            {'Please enter the verification code you have received at:\n'}
            {'\n'}
            {route.params.value}
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
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <View
                    key={index}
                    onLayout={getCellOnLayoutHandler(index)}
                    style={[
                      styles.cell,
                      { backgroundColor: inputBkgColor, opacity: 0.8 },
                      isFocused && { opacity: 1 }
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 30
                      }}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </View>
                )}
              />
              <ActionButton
                text={'Reset Password'}
                onPress={() => {}}
                style={{ marginTop: 40 }}
                fontStyle={{ color: Colors.light.primary }}
              />
              <TouchableOpacity
                style={{ padding: 30, paddingBottom: 0 }}
                onPress={() => onResendPress()}
                disabled={isResendButtonDisabled}
              >
                <Text style={{ fontSize: 15, opacity: isResendButtonDisabled ? 0.4 : 0.7 }}>
                  Resend Code
                  {isResendButtonDisabled ? (
                    <Text style={{ fontSize: 15, opacity: 0.3 }}> ({secondsLeft}s)</Text>
                  ) : null}
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
  },
  codeFieldRoot: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -8
  },
  cell: {
    marginHorizontal: 8,
    borderRadius: 10,
    lineHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 45,
    height: 45
  }
});
