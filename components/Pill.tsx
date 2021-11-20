import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, useThemeColor, View } from '../components/Themed';

import { MaterialIcons } from '@expo/vector-icons';
import { PressableScale } from 'react-native-pressable-scale';

export default function Pill({
  title,
  subTitle,
  time,
  notes
}: {
  title: string;
  subTitle: string;
  time: string;
  notes: string;
}) {
  const pillColor = useThemeColor({}, 'pillBackground');
  const textColor = useThemeColor({}, 'text');

  return (
    <PressableScale style={[styles.query, { backgroundColor: pillColor }]} onPress={() => {}}>
      <View style={styles.querycontent}>
        <Image source={require('../assets/images/harold.png')} style={styles.avatar} />
        <View style={styles.querytext}>
          <View style={styles.querytitle}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{title}</Text>
            <Text style={{ marginLeft: 5, fontSize: 18, fontWeight: '500', opacity: 0.3 }}>
              {subTitle}
            </Text>
          </View>
          <Text style={{ fontSize: 16, opacity: 0.5, marginTop: 5 }}>{notes}</Text>
        </View>
        <View style={styles.querytime}>
          <Text style={{ fontSize: 16, fontWeight: '400', opacity: 0.5 }}>{time}</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={textColor}
            style={{ opacity: 0.5 }}
          />
        </View>
      </View>
    </PressableScale>
  );
}
const styles = StyleSheet.create({
  query: {
    height: 90,
    marginHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10
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
  }
});
