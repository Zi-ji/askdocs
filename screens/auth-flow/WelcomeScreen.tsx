import * as React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Text } from '../../components/Themed';
import WelcomeContent from './WelcomeContent';
import { useThemeColor } from '../../components/Themed';
import { AuthFlowScreenProps } from '../../types';
import useWelcomeAnimation from './useWelcomeAnimation';

type pageStatus = 'welcome' | 'login' | 'register';

export default function WelcomeScreen({ navigation }: AuthFlowScreenProps<'Welcome'>) {
  const [currentPage, setCurrentPage] = React.useState<pageStatus>('welcome');
  const insets = useSafeAreaInsets();

  const topBackground = useThemeColor({}, 'primary');
  const bottomBackground = useThemeColor({}, 'background');
  const titleColor = useThemeColor({}, 'title');

  const { topAnimatedStyle, bottomAnimatedStyle, expandToFull, expandToMinimum } =
    useWelcomeAnimation();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: topBackground }]}
      edges={['top', 'left', 'right']}
    >
      <Animated.View style={[styles.top, topAnimatedStyle]}>
        <Text style={[styles.title, { color: titleColor }]}>
          {currentPage === 'welcome' ? 'Welcome to\n' : 'Sign in to\n'}
          <Text style={{ fontWeight: 'bold', color: titleColor }}>AskDocs</Text>
        </Text>
      </Animated.View>

      <Animated.View
        style={[styles.bottom, { backgroundColor: bottomBackground }, bottomAnimatedStyle]}
      >
        <WelcomeContent
          status={currentPage}
          setStatus={setCurrentPage}
          expandToFull={expandToFull}
          expandToMin={expandToMinimum}
          navigation={navigation}
        />
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
    fontWeight: '500'
  },
  top: {
    marginLeft: 40,
    justifyContent: 'center'
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
});
