import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { WelcomeNavigationProp } from '../../types';
import BackButton from '../../components/BackButton';
import ActionButton from '../../components/ActionButton';

type pageStatus = 'welcome' | 'login' | 'register';

export default function WelcomeContent({
  status,
  setStatus,
  expandToFull,
  expandToMin,
  navigation
}: {
  status: pageStatus;
  setStatus: (status: pageStatus) => void;
  expandToFull: () => void;
  expandToMin: () => void;
  navigation: WelcomeNavigationProp;
}) {
  switch (status) {
    case 'welcome':
      return (
        <View style={[styles.buttonContainer, { justifyContent: 'center' }]}>
          <ActionButton
            text={'Sign In'}
            onPress={() => {
              setStatus('login');
              expandToFull();
            }}
            style={styles.button}
            fontStyle={{ color: Colors.light.primary }}
          />

          <ActionButton
            text={'Register'}
            onPress={() => {
              setStatus('register');
              expandToFull();
            }}
            style={[styles.button, styles.buttonMargin]}
          />
        </View>
      );
    case 'login':
      return (
        <View style={styles.container}>
          <BackButton
            onPress={() => {
              expandToMin();
              setStatus('welcome');
            }}
          />
          <View style={styles.buttonContainer}>
            <ActionButton
              text={'Sign in with Email'}
              onPress={() => navigation.navigate('Login')}
              iconName="envelope"
            />
            <ActionButton
              text={'Sign in with phone number'}
              onPress={() => navigation.navigate('Login')}
              style={styles.buttonMargin}
              iconName="phone-square"
            />
            <ActionButton
              text={'Sign in with Apple'}
              onPress={() => navigation.navigate('Login')}
              style={styles.buttonMarginBoth}
              iconName="apple"
            />
          </View>
        </View>
      );
    case 'register':
      return (
        <View style={styles.container}>
          <BackButton
            onPress={() => {
              expandToMin();
              setStatus('welcome');
            }}
          />
          <View style={styles.buttonContainer}>
            <ActionButton
              text={'Register with Email'}
              onPress={() => navigation.navigate('Register')}
              iconName="envelope"
            />
            <ActionButton
              text={'Register with phone number'}
              onPress={() => navigation.navigate('Register')}
              style={styles.buttonMargin}
              iconName="phone-square"
            />
            <ActionButton
              text={'Register with Apple'}
              onPress={() => navigation.navigate('Register')}
              style={styles.buttonMarginBoth}
              iconName="apple"
            />
          </View>
        </View>
      );
    default:
      return <Text>End</Text>;
  }
}

const styles = StyleSheet.create({
  button: {
    width: '80%'
  },
  buttonMargin: {
    marginTop: 30
  },
  buttonMarginBoth: {
    marginTop: 30,
    marginBottom: 30
  },
  container: {
    flex: 1,
    padding: 20
  },
  buttonContainer: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
