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
            fontStyle={{ color: Colors.light.primary }}
          />

          <ActionButton text={'Register'} onPress={() => {}} style={styles.buttonMargin} />
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
              style={styles.buttonMargin}
              iconName="envelope"
            />
            <ActionButton
              text={'Sign in with phone number'}
              onPress={() => {}}
              style={styles.buttonMargin}
              iconName="phone-square"
            />
            <ActionButton
              text={'Sign in with Apple'}
              onPress={() => {
                expandToMin();
                setStatus('welcome');
              }}
              style={styles.buttonMargin}
              iconName="apple"
            />
          </View>
        </View>
      );
    case 'register':
      return <View />;
    default:
      return <Text>End</Text>;
  }
}

const styles = StyleSheet.create({
  buttonMargin: {
    marginTop: 40
  },
  container: {
    flex: 1,
    padding: 20
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center'
  }
});
