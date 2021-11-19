import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, Text } from '../../components/Themed';
import { useThemeColor } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';

import { MaterialIcons } from '@expo/vector-icons';
import ActionButton from '../../components/ActionButton';
import { PressableScale } from 'react-native-pressable-scale';
import { StatusBar } from 'expo-status-bar';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  withSequence,
  withDelay,
  withRepeat
} from 'react-native-reanimated';

export default function WaitingScreen({ navigation }: QueryFlowScreenProps<'Waiting'>) {
  const [input, setInput] = React.useState<string>('');

  const colorScheme = useColorScheme();

  const iconColor = useThemeColor({}, 'text');
  const background = useThemeColor({}, 'secondary');
  const cardBackground = useThemeColor({}, 'cardBackground');
  const cardElevated = useThemeColor({}, 'cardElevated');

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${offset.value}deg` }]
    };
  });

  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(360, { duration: 5000, easing: Easing.linear }),
      -1,
      false
    );
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Chat' }]
      });
    }, 5000);
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: background }]}
      edges={['left', 'right', 'bottom']}
    >
      <PressableScale
        style={{
          height: 300,
          alignSelf: 'stretch',
          padding: 20,
          marginTop: 20,
          backgroundColor: cardBackground,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        accessibilityLabel="Doctor's Profile"
      >
        <View
          style={{
            flex: 7,
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
            <Image
              source={require('../../assets/images/harold.png')}
              style={{
                width: 110,
                height: 110,
                borderRadius: 60,
                backgroundColor: 'lightgrey',
                marginBottom: 20,
                borderWidth: 2,
                borderColor: 'lightgrey'
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
            marginTop: 10,
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <Animated.View
          style={[
            {
              backgroundColor: 'transparent'
            },
            animatedStyles
          ]}
        >
          <MaterialIcons name="cached" size={80} color={iconColor} />
        </Animated.View>
        <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 20 }}>
          Waiting for Dr. Harold to respond
        </Text>
      </View>
      <View
        style={{
          marginTop: 40,
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
          text={'Request New Doctor'}
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
