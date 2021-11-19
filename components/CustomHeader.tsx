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
  rightOnPress,
  highlight = true
}: {
  backOnPress: () => void;
  title: string | undefined;
  rightIconName?: 'ellipsis' | 'checkmark';
  rightOnPress?: () => void;
  highlight?: boolean;
}) {
  const background = useThemeColor({}, highlight ? 'primary' : 'secondary');
  const textColor = useThemeColor({}, highlight ? 'textHighlight' : 'text');

  return (
    <SafeAreaView style={[styles.containter, { backgroundColor: background }]} edges={['top']}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.button} onPress={backOnPress} accessibilityLabel="Go Back">
          <FontAwesome name="angle-left" size={35} color={textColor} style={styles.back} />
          {title ? null : (
            <Text highlight={highlight} style={styles.backtext}>
              Back
            </Text>
          )}
        </TouchableOpacity>
        {title ? (
          <Text highlight={highlight} style={styles.title}>
            {title}
          </Text>
        ) : null}
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
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  button: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  back: {
    marginRight: 20
  },
  title: {
    marginLeft: 5,
    fontWeight: '500',
    fontSize: 24
  },
  backtext: {
    marginLeft: -5,
    fontWeight: '500',
    fontSize: 18
  }
});
