import * as React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text, useThemeColor, View } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';
import SmallButton from '../../components/SmallButton';
import NextButton from '../../components/NextButton';

import { MaterialIcons } from '@expo/vector-icons';
import { PressableScale } from 'react-native-pressable-scale';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }: QueryFlowScreenProps<'Home'>) {
  const topBackground = useThemeColor({}, 'primary');
  const bottomBackground = useThemeColor({}, 'secondary');
  const titleColor = useThemeColor({}, 'title');
  const textColor = useThemeColor({}, 'text');
  const boxColor = useThemeColor({}, 'inactiveBackground');
  const pillColor = useThemeColor({}, 'pillBackground');
  const insets = useSafeAreaInsets();

  const emptyState = true;

  const DefaultInput = () => (
    <>
      <View
        style={{
          marginTop: 20,
          flex: 1,
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
              <PressableScale style={[styles.query, { backgroundColor: pillColor }]}>
                <View style={styles.querycontent}>
                  <View style={styles.avatar} />
                  <View style={styles.querytext}>
                    <View style={styles.querytitle}>
                      <Text style={{ fontSize: 18, fontWeight: '600' }}>Cold</Text>
                      <Text
                        style={{ marginLeft: 5, fontSize: 18, fontWeight: '500', opacity: 0.3 }}
                      >
                        Dr. Harold
                      </Text>
                    </View>
                    <Text style={{ fontSize: 16, opacity: 0.5, marginTop: 2.5 }}>
                      I have a fever and a cough.
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
    marginRight: 10
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
