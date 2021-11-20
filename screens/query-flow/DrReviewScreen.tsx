import * as React from 'react';
import { StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { View, Text } from '../../components/Themed';
import { useThemeColor } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';

import { MaterialIcons } from '@expo/vector-icons';
import ActionButton from '../../components/ActionButton';
import { PressableScale } from 'react-native-pressable-scale';
import { StatusBar } from 'expo-status-bar';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import { Rating, AirbnbRating } from 'react-native-ratings';
import StyledTextInput from '../../components/StyledTextInput';

export default function DrReviewScreen({ navigation }: QueryFlowScreenProps<'DrReview'>) {
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
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 30
        }}
        extraScrollHeight={60}
      >
        <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 20 }}>
          How was Dr. Harold?
        </Text>
        <View
          style={{
            height: 250,
            alignSelf: 'stretch',
            padding: 20,
            backgroundColor: cardBackground,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center'
          }}
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
        </View>
        <View
          style={{
            marginTop: 20,
            backgroundColor: 'transparent',
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <AirbnbRating
            count={5}
            reviews={['Unhelpful', 'Meh', 'OK', 'Good', 'Amazing']}
            size={30}
            reviewSize={18}
            reviewColor={iconColor}
            selectedColor={iconColor}
            starContainerStyle={{
              width: 220,
              marginTop: 10,
              justifyContent: 'space-between'
            }}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            backgroundColor: 'transparent',
            alignSelf: 'stretch',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <StyledTextInput
            value={input}
            placeholder="Additional Comments"
            multiline={true}
            onChangeText={(text) => setInput(text)}
            style={styles.input}
          />
        </View>
      </KeyboardAwareScrollView>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  button: {
    width: '60%'
  },
  buttonMargin: {
    marginTop: 20
  },
  input: {
    height: 200
  }
});
