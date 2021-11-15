import * as React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Text } from '../components/Themed';
import { useThemeColor } from '../components/Themed';
import { PressableScale } from 'react-native-pressable-scale';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SmallButton({
  onPress,
  style = {},
  iconName,
  accessibilityLabel = 'button'
}: {
  onPress: () => void;
  style?: ViewStyle;
  iconName?: keyof typeof MaterialIcons.glyphMap;
  accessibilityLabel?: string;
}) {
  const backgroundColor = useThemeColor({}, 'inactiveBackground');

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <MaterialIcons name={iconName} size={26} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 16,
    width: 55,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: '600',
    fontSize: 16
  }
});
