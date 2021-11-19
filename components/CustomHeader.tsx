import * as React from 'react';
import { StyleSheet, TouchableOpacity, View as DefaultView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../components/Themed';
import { useThemeColor } from '../components/Themed';

export default function CustomHeader({
  backOnPress,
  title,
  rightIconName,
  rightOnPress
}: {
  backOnPress: () => void;
  title: string;
  rightIconName?: 'ellipsis' | 'checkmark';
  rightOnPress?: () => void;
}) {
  const background = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView style={[styles.containter, { backgroundColor: background }]} edges={['top']}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.button} onPress={backOnPress}>
          <FontAwesome name="angle-left" size={35} color={textColor} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightOnPress && (
        <TouchableOpacity style={styles.button} onPress={rightOnPress}>
          <Ionicons
            size={25}
            color={textColor}
            name={rightIconName === 'ellipsis' ? 'ellipsis-horizontal' : 'checkmark'}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containter: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 20
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  back: {
    marginRight: 20
  },
  title: {
    fontWeight: '500',
    fontSize: 24
  }
});
