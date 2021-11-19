import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, Text } from '../../components/Themed';
import { useThemeColor } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';

import { MaterialIcons } from '@expo/vector-icons';
import ActionButton from '../../components/ActionButton';
import { PressableScale } from 'react-native-pressable-scale';
import { StatusBar } from 'expo-status-bar';
import useColorScheme from '../../hooks/useColorScheme';

export default function FoundDoctorScreen({ navigation }: QueryFlowScreenProps<'FoundDoctor'>) {
  const [input, setInput] = React.useState<string>('');

  const colorScheme = useColorScheme();

  const iconColor = useThemeColor({}, 'text');
  const background = useThemeColor({}, 'secondary');
  const cardBackground = useThemeColor({}, 'cardBackground');
  const cardElevated = useThemeColor({}, 'cardElevated');

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: background }]}
      edges={['left', 'right', 'bottom']}
    >
      <Text style={{ flex: 2, fontSize: 22, fontWeight: 'bold', paddingTop: 10 }}>
        Based on what you've told us, we think this doctor can answer your questions.
      </Text>
      <PressableScale
        style={{
          flex: 6,
          alignSelf: 'stretch',
          padding: 20,
          backgroundColor: cardBackground,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        accessibilityLabel="Doctor's Profile"
      >
        <View
          style={{
            flex: 5,
            backgroundColor: 'transparent',
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              flex: 5.5,
              backgroundColor: cardElevated,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: 'lightgrey',
                marginBottom: 20
              }}
            />
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Dr. Harold</Text>
          </View>
          <View
            style={{
              marginLeft: 15,
              flex: 4.5,
              backgroundColor: 'transparent'
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: cardElevated,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <MaterialIcons name="chat-bubble" size={24} color={iconColor} />
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>1.2k</Text>
              </View>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}
              >
                Answered{'\n'}Queries
              </Text>
            </View>
            <View
              style={{
                marginTop: 15,
                flex: 1,
                backgroundColor: cardElevated,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <MaterialIcons name="star" size={24} color={iconColor} />
                <Text style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>
                  4.99<Text style={{ opacity: 0.5 }}>/5</Text>
                </Text>
              </View>
              <Text
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontSize: 11,
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}
              >
                Rating
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flex: 3,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              maxWidth: '60%',
              textAlign: 'center'
            }}
          >
            Concord Repatriation General Hospital
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: '500',
              fontSize: 16,
              maxWidth: '80%',
              textAlign: 'center'
            }}
          >
            Specialises in: heart issues
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontWeight: '500',
              fontSize: 16,
              maxWidth: '80%',
              textAlign: 'center',
              opacity: 0.5
            }}
          >
            Usually replies in an hour
          </Text>
        </View>
      </PressableScale>
      <View
        style={{
          marginTop: 50,
          flex: 3,
          backgroundColor: 'transparent'
        }}
      >
        <ActionButton
          text={'Edit Query'}
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.button}
        />
        <ActionButton
          text={'Edit Query'}
          onPress={() => {
            navigation.goBack();
          }}
          style={[styles.button, styles.buttonMargin]}
        />
      </View>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30
  },
  button: {
    width: '60%'
  },
  buttonMargin: {
    marginTop: 20
  }
});
