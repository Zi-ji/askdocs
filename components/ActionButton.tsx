import * as React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Text } from '../components/Themed';
import { useThemeColor } from '../components/Themed';
import { PressableScale } from 'react-native-pressable-scale';

export default function ActionButton({
  text,
  onPress,
  style = {},
  fontStyle = {},
  iconName
}: {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  fontStyle?: TextStyle;
  iconName?: keyof typeof FontAwesome.glyphMap;
}) {
  const backgroundColor = useThemeColor({}, 'inputBackground');
  const iconColor = useThemeColor({}, 'text');

  return (
    <PressableScale style={[styles.button, { backgroundColor }, style]} onPress={onPress}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {iconName && (
          <FontAwesome name={iconName} size={24} color={iconColor} style={{ marginRight: 10 }} />
        )}
      </View>
      <View
        style={{
          flex: 8
        }}
      >
        <Text style={[styles.text, fontStyle]}>{text}</Text>
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 16
  }
});
