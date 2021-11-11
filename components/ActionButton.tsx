import * as React from "react";
import { StyleSheet, TextStyle, ViewStyle, } from "react-native";

import { Text } from "../components/Themed";
import { useThemeColor } from "../components/Themed";
import { PressableScale } from "react-native-pressable-scale";

export default function ActionButton({
  text,
  onPress,
  style = {},
  fontStyle = {},
}: {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  fontStyle?: TextStyle;
}) {
  const backgroundColor = useThemeColor({}, 'inputBackground');
  return (
    <PressableScale
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
    >
      <Text style={[styles.text, fontStyle]}>
        {text}
      </Text>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 16
  }
});
