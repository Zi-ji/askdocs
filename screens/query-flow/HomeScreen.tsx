import * as React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useThemeColor, View } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';
import SmallButton from '../../components/SmallButton';
import NextButton from '../../components/NextButton';

export default function HomeScreen({ navigation }: QueryFlowScreenProps<'Home'>) {
  const topBackground = useThemeColor({}, 'primary');
  const bottomBackground = useThemeColor({}, 'secondary');
  const titleColor = useThemeColor({}, 'title');
  const boxColor = useThemeColor({}, 'inactiveBackground');
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: topBackground }]}>
      <View style={styles.top}>
        <View style={[styles.newquery, { marginTop: insets.top + 40 }]}>
          <Text style={[styles.title, { marginLeft: 5 }]}>How are you feeling?</Text>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 450,
            width: '85%',
            borderRadius: 20,
            backgroundColor: boxColor
          }}
        >
          <View
            style={{
              padding: 25,
              backgroundColor: 'transparent'
            }}
          >
            <Text
              style={{
                color: titleColor,
                fontWeight: '500',
                fontStyle: 'italic',
                opacity: 0.5,
                fontSize: 16
              }}
            >
              I feel...
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'transparent',
            width: '85%',
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View
            style={{
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <SmallButton
              onPress={() => {}}
              iconName="camera-alt"
              accessibilityLabel="Take photo using camera"
            />
            <SmallButton
              onPress={() => {}}
              style={{ marginLeft: 20 }}
              iconName="photo-library"
              accessibilityLabel="Select photo from library"
            />
            <SmallButton
              onPress={() => {}}
              style={{ marginLeft: 20 }}
              iconName="history"
              accessibilityLabel="Attach items from medical history"
            />
          </View>
          <NextButton text="Next" onPress={() => {}} disabled={true} />
        </View>
      </View>
      <View
        style={[
          styles.queriesbox,
          {
            backgroundColor: bottomBackground
          }
        ]}
      >
        <View style={styles.subtitle}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>No Queries Yet</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  top: {
    flex: 9,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  newquery: {
    backgroundColor: 'transparent',
    width: '85%'
  },
  queriesbox: {
    flex: 1,
    alignSelf: 'stretch',
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    justifyContent: 'center'
  },
  subtitle: {
    padding: 30,
    backgroundColor: 'transparent',
    opacity: 0.3
  }
});
