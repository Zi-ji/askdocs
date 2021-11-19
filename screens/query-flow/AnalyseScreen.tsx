import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, Text } from '../../components/Themed';
import { useThemeColor } from '../../components/Themed';
import { QueryFlowScreenProps } from '../../types';

import { MaterialIcons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
  withSequence,
  withDelay,
  withRepeat
} from 'react-native-reanimated';
import ActionButton from '../../components/ActionButton';

export default function AnalyseScreen({ navigation }: QueryFlowScreenProps<'Analyse'>) {
  const [input, setInput] = React.useState<string>('');

  const topBackground = useThemeColor({}, 'primary');
  const bottomBackground = useThemeColor({}, 'secondary');
  const titleColor = useThemeColor({}, 'title');

  const insets = useSafeAreaInsets();
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offsetX.value * 50 }, { translateY: offsetY.value * 50 }]
    };
  });

  const animateNow = () => {
    offsetX.value = withRepeat(
      withDelay(
        1200,
        withSequence(
          withTiming(0.1, {
            duration: 1200,
            easing: Easing.out(Easing.exp)
          }),
          withDelay(
            1200,
            (offsetX.value = withTiming(-0.2, {
              duration: 1200,
              easing: Easing.out(Easing.exp)
            }))
          )
        )
      ),
      -1,
      true
    );
    offsetY.value = withRepeat(
      withDelay(
        2400,
        withSequence(
          (offsetY.value = withTiming(-0.1, {
            duration: 1200,
            easing: Easing.out(Easing.exp)
          })),
          withDelay(
            1200,
            (offsetY.value = withTiming(0.1, {
              duration: 1200,
              easing: Easing.out(Easing.exp)
            }))
          )
        )
      ),
      -1,
      true
    );
  };

  React.useEffect(() => {
    animateNow();
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: topBackground }]}
      edges={['top', 'left', 'right']}
    >
      <View
        style={{
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent'
        }}
      >
        <Animated.View
          style={[
            {
              backgroundColor: 'transparent'
            },
            animatedStyles
          ]}
        >
          <MaterialIcons name="search" size={80} color={titleColor} />
        </Animated.View>
        <Text highlight style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>
          Hang tight...
        </Text>
      </View>
      <View
        style={[
          styles.queriesbox,
          {
            backgroundColor: bottomBackground,
            paddingBottom: insets.bottom
          }
        ]}
      >
        <View
          style={{
            flex: 5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            marginHorizontal: 60
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center' }}>
            We’re analysing your query and looking for an appropriate doctor.
          </Text>
        </View>
        <View
          style={{
            flex: 5
          }}
        >
          <ActionButton
            text={'Edit Query'}
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.button}
          />
          <ActionButton
            text={'TEST BUTTON'}
            onPress={() => {
              navigation.navigate('FoundDoctor');
            }}
            style={[styles.button, styles.buttonMargin]}
          />
          <ActionButton
            text={'Back to Home'}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            style={[styles.button, styles.buttonMargin]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 0
  },
  queriesbox: {
    flex: 6,
    alignSelf: 'stretch',
    borderTopLeftRadius: 47,
    borderTopRightRadius: 47,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '60%'
  },
  buttonMargin: {
    marginTop: 30
  }
});
