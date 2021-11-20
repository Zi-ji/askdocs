import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useThemeColor, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import SmallButton from '../components/SmallButton';
import NextButton from '../components/NextButton';

import { MaterialIcons } from '@expo/vector-icons';
import { PressableScale } from 'react-native-pressable-scale';
import { ScrollView } from 'react-native-gesture-handler';
import DemoContext from '../components/DemoContext';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  const topBackground = useThemeColor({}, 'primary');
  const bottomBackground = useThemeColor({}, 'secondary');
  const titleColor = useThemeColor({}, 'title');
  const textColor = useThemeColor({}, 'text');
  const boxColor = useThemeColor({}, 'inactiveBackground');
  const pillColor = useThemeColor({}, 'pillBackground');
  const insets = useSafeAreaInsets();
  const myContext = React.useContext(DemoContext);
  const { emptyState } = myContext;

  const DefaultInput = () => (
    <>
      <PressableScale
        style={{
          marginTop: 20,
          flex: 1,
          width: '85%',
          borderRadius: 20,
          backgroundColor: boxColor
        }}
        onPress={() =>
          navigation.navigate('QueryFlow', { screen: 'NewQuery', params: { active: 'text' } })
        }
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
      </PressableScale>
      <View
        style={{
          backgroundColor: 'transparent',
          width: '85%',
          marginVertical: 25,
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
            onPress={() =>
              navigation.navigate('QueryFlow', {
                screen: 'NewQuery',
                params: { active: 'camera' }
              })
            }
            iconName="camera-alt"
            accessibilityLabel="Take photo using camera"
          />
          <SmallButton
            onPress={() =>
              navigation.navigate('QueryFlow', {
                screen: 'NewQuery',
                params: { active: 'library' }
              })
            }
            style={{ marginLeft: 20 }}
            iconName="photo-library"
            accessibilityLabel="Select photo from library"
          />
          <SmallButton
            onPress={() =>
              navigation.navigate('QueryFlow', {
                screen: 'NewQuery',
                params: { active: undefined }
              })
            }
            style={{ marginLeft: 20 }}
            iconName="history"
            accessibilityLabel="Attach items from medical history"
          />
        </View>
        <NextButton text="Next" onPress={() => {}} disabled={true} />
      </View>
    </>
  );

  return (
    <View style={[styles.container, { backgroundColor: topBackground }]}>
      <View
        style={[
          styles.top,
          emptyState && {
            flex: 9
          },
          !emptyState && {
            marginBottom: 40
          }
        ]}
      >
        <View style={[styles.newquery, { marginTop: insets.top + 40 }]}>
          <Text style={[styles.title, { marginLeft: 5 }]}>How are you feeling?</Text>
        </View>
        {emptyState ? (
          <DefaultInput />
        ) : (
          <PressableScale
            style={{
              marginTop: 20,
              width: '85%',
              borderRadius: 30,
              backgroundColor: boxColor
            }}
            onPress={() =>
              navigation.navigate('QueryFlow', {
                screen: 'NewQuery',
                params: { active: undefined }
              })
            }
          >
            <View
              style={{
                padding: 25,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <MaterialIcons name="add" size={22} color="white" />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '500',
                  fontSize: 18,
                  marginLeft: 10,
                  paddingVertical: 5
                }}
              >
                new query
              </Text>
            </View>
          </PressableScale>
        )}
      </View>
      <View
        style={[
          styles.queriesbox,
          {
            backgroundColor: bottomBackground
          },
          false && {
            justifyContent: 'center'
          }
        ]}
      >
        {emptyState ? (
          <View style={styles.subtitle}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>No Queries Yet</Text>
          </View>
        ) : (
          <>
            <View style={styles.sectiontitle}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Queries</Text>
            </View>
            <ScrollView>
              <PressableScale
                style={[styles.query, { backgroundColor: pillColor }]}
                onPress={() => navigation.navigate('QueryFlow', { screen: 'Chat' })}
              >
                <View style={styles.querycontent}>
                  <Image source={require('../assets/images/harold.png')} style={styles.avatar} />
                  <View style={styles.querytext}>
                    <View style={styles.querytitle}>
                      <Text style={{ fontSize: 18, fontWeight: '600' }}>Chest Pain</Text>
                      <Text
                        style={{ marginLeft: 5, fontSize: 18, fontWeight: '500', opacity: 0.3 }}
                      >
                        Dr. Harold
                      </Text>
                    </View>
                    <Text style={{ fontSize: 16, opacity: 0.5, marginTop: 5 }}>
                      When did you first start...
                    </Text>
                  </View>
                  <View style={styles.querytime}>
                    <Text style={{ fontSize: 16, fontWeight: '400', opacity: 0.5 }}>12:00</Text>
                    <MaterialIcons
                      name="chevron-right"
                      size={24}
                      color={textColor}
                      style={{ opacity: 0.5 }}
                    />
                  </View>
                </View>
              </PressableScale>
              <PressableScale
                style={[styles.query, { backgroundColor: pillColor, marginTop: 15 }]}
                onPress={() => navigation.navigate('QueryFlow', { screen: 'Chat' })}
              >
                <View style={styles.querycontent}>
                  <Image
                    source={{
                      uri: 'https://placeimg.com/50/50/people'
                    }}
                    style={styles.avatar}
                  />
                  <View style={styles.querytext}>
                    <View style={styles.querytitle}>
                      <Text style={{ fontSize: 18, fontWeight: '600' }}>Cold</Text>
                      <Text
                        style={{ marginLeft: 5, fontSize: 18, fontWeight: '500', opacity: 0.3 }}
                      >
                        Dr. Jeff
                      </Text>
                    </View>
                    <Text style={{ fontSize: 16, opacity: 0.5, marginTop: 5 }}>
                      How are you feeling?
                    </Text>
                  </View>
                  <View style={styles.querytime}>
                    <Text style={{ fontSize: 14, fontWeight: '400', opacity: 0.5 }}>Yesterday</Text>
                    <MaterialIcons
                      name="chevron-right"
                      size={24}
                      color={textColor}
                      style={{ opacity: 0.5 }}
                    />
                  </View>
                </View>
              </PressableScale>
              <PressableScale
                style={[styles.query, { backgroundColor: pillColor, marginTop: 15 }]}
                onPress={() => navigation.navigate('QueryFlow', { screen: 'Chat' })}
              >
                <View style={styles.querycontent}>
                  <Image
                    source={{
                      uri: 'https://placeimg.com/50/50/any'
                    }}
                    style={styles.avatar}
                  />
                  <View style={styles.querytext}>
                    <View style={styles.querytitle}>
                      <Text style={{ fontSize: 18, fontWeight: '600' }}>Itch</Text>
                      <Text
                        style={{ marginLeft: 5, fontSize: 18, fontWeight: '500', opacity: 0.3 }}
                      >
                        Dr. Moore
                      </Text>
                    </View>
                    <Text style={{ fontSize: 16, opacity: 0.5, marginTop: 5 }}>
                      Hello, how can I help?
                    </Text>
                  </View>
                  <View style={styles.querytime}>
                    <Text style={{ fontSize: 14, fontWeight: '400', opacity: 0.5 }}>Monday</Text>
                    <MaterialIcons
                      name="chevron-right"
                      size={24}
                      color={textColor}
                      style={{ opacity: 0.5 }}
                    />
                  </View>
                </View>
              </PressableScale>
            </ScrollView>
          </>
        )}
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
  query: {
    height: 90,
    marginHorizontal: 20,
    borderRadius: 25
  },
  querycontent: {
    flex: 1,
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  querytitle: {
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  querytext: {
    flex: 3,
    backgroundColor: 'transparent'
  },
  querytime: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgrey',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'lightgrey'
  },
  sectiontitle: {
    marginTop: 35,
    marginBottom: 25,
    marginLeft: 40,
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  top: {
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
    borderTopRightRadius: 47
  },
  subtitle: {
    padding: 30,
    backgroundColor: 'transparent',
    opacity: 0.3
  }
});
