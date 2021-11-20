import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
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
import { ScrollView } from 'react-native-gesture-handler';

export default function DrProfileScreen({ navigation }: QueryFlowScreenProps<'DrProfile'>) {
  const colorScheme = useColorScheme();

  const iconColor = useThemeColor({}, 'text');
  const background = useThemeColor({}, 'secondary');
  const cardBackground = useThemeColor({}, 'cardBackground');
  const cardElevated = useThemeColor({}, 'cardElevated');

  const EducationSection = () => (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 40
      }}
    >
      <View
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: 20,
          justifyContent: 'space-between'
        }}
      >
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Education</Text>
        <View
          style={{
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: 0.5
          }}
        >
          <MaterialIcons name="verified-user" size={18} color={iconColor} />
          <Text style={{ marginLeft: 5, fontWeight: '600', fontSize: 16 }}>Verified</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: cardBackground,
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderRadius: 25,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flex: 6,
            backgroundColor: 'transparent'
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 16, opacity: 0.7 }}>
            University of Queensland
          </Text>
          <Text style={{ fontWeight: '500', fontSize: 20 }}>Master of Public Health</Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: 'transparent'
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 14 }}>2008-2012</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: cardBackground,
          flexDirection: 'row',
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderRadius: 25,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flex: 6,
            backgroundColor: 'transparent'
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 16, opacity: 0.7 }}>
            University of New South Wales
          </Text>
          <Text style={{ fontWeight: '500', fontSize: 20 }}>Surgery PhD</Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: 'transparent'
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 14 }}>2012-2018</Text>
        </View>
      </View>
    </View>
  );

  const WorkSection = () => (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 40
      }}
    >
      <View
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: 20,
          justifyContent: 'space-between'
        }}
      >
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Work</Text>
        <View
          style={{
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            opacity: 0.5
          }}
        >
          <MaterialIcons name="verified-user" size={18} color={iconColor} />
          <Text style={{ marginLeft: 5, fontWeight: '600', fontSize: 16 }}>Verified</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: cardBackground,
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 25,
          borderRadius: 25,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flex: 6,
            backgroundColor: 'transparent'
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 16, opacity: 0.7 }}>
            Concord Repatriation{'\n'}General Hospital
          </Text>
          <Text style={{ fontWeight: '500', fontSize: 20 }}>Head of Cardiology Department</Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: 'transparent'
          }}
        >
          <Text style={{ fontWeight: '500', fontSize: 14 }}>2012-</Text>
        </View>
      </View>
    </View>
  );

  const ReviewsSection = () => (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 40
      }}
    >
      <View
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: 20,
          justifyContent: 'space-between'
        }}
      >
        <Text style={{ fontWeight: '600', fontSize: 16 }}>Reviews</Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center'
          }}
          accessibilityLabel="Leave a review"
          onPress={() => navigation.navigate('DrReview')}
        >
          <MaterialIcons name="add" size={18} color={iconColor} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: cardBackground,
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 25
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'transparent',
            alignItems: 'flex-start'
          }}
        >
          <View
            style={{
              flex: 6,
              backgroundColor: 'transparent'
            }}
          >
            <Text style={{ fontWeight: '500', fontSize: 16, opacity: 0.7 }}>Anonymous User</Text>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>Thank you</Text>
            <View
              style={{
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5
              }}
            >
              <MaterialIcons name="star" size={24} color={iconColor} />
              <MaterialIcons name="star" size={24} color={iconColor} />
              <MaterialIcons name="star" size={24} color={iconColor} />
              <MaterialIcons name="star" size={24} color={iconColor} />
              <MaterialIcons name="star" size={24} color={iconColor} />
            </View>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              backgroundColor: 'transparent'
            }}
          >
            <Text style={{ fontWeight: '500', fontSize: 14 }}>Sep 2020</Text>
          </View>
        </View>
        <Text style={{ fontWeight: '400', fontSize: 16, marginVertical: 10 }}>
          Dr. Harold is amazing and immediately knew what was wrong. Answered all my questions and
          was very patient.
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: background }]}
      edges={['left', 'right', 'bottom']}
    >
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingBottom: 50
        }}
      >
        <View
          style={{
            height: 360,
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
        </View>
        <EducationSection />
        <WorkSection />
        <ReviewsSection />
        <PressableScale
          style={{
            alignSelf: 'stretch',
            marginTop: 20,
            backgroundColor: cardBackground,
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => alert('Not implemented')}
        >
          <Text style={{ fontWeight: '500', fontSize: 16 }}>More Reviews</Text>
        </PressableScale>
      </ScrollView>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    width: '60%'
  },
  buttonMargin: {
    marginTop: 20
  }
});
