import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

import { Text } from "../components/Themed";
import { useThemeColor } from "../components/Themed";

export default function BackButton(props : TouchableOpacity['props']) {
  const color = useThemeColor({}, 'text');
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <FontAwesome name="angle-left" size={30} color={color} style={styles.icon} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '600'
  }
})
