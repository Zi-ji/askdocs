import * as React from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '../../components/Themed';
import ActionButton from '../../components/ActionButton';
import { useThemeColor } from '../../components/Themed';
import { AuthFlowScreenProps } from '../../types';
import useWelcomeAnimation from './useWelcomeAnimation';

type pageStatus = 'welcome' | 'login' | 'register';

export default function WelcomeScreen({ navigation }: AuthFlowScreenProps<'Welcome'>) {
  const [currentPage, setCurrentPage] = React.useState<pageStatus>('welcome');
  
  const topBackground = useThemeColor({}, 'primary');
  const bottomBackground = useThemeColor({}, 'background');
  const titleColor = useThemeColor({}, 'title');
  
  const {
    topAnimatedStyle,
    bottomAnimatedStyle,
    expandToFull,
    expandToMinimum
  } = useWelcomeAnimation();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: topBackground}]}
      edges={["top", "left", "right"]}
    >
      <Animated.View
        style={[
          { marginLeft: 40, justifyContent: "center" },
          topAnimatedStyle
        ]}
      >
        <Text style={[styles.title, {color: titleColor }]}>Welcome to</Text>
        <Text style={[styles.title, { fontWeight: "bold", color: titleColor }]}>AskDocs</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.bottom,
          { backgroundColor: bottomBackground },
          bottomAnimatedStyle,
        ]}
      >
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  }
});