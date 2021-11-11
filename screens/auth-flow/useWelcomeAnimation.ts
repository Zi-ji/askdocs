import {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function useWelcomeAnimation() {
  const topValue = useSharedValue(6);
  const bottomValue = useDerivedValue(() => {
    return 10 - topValue.value;
  });
  
  const topAnimatedStyle = useAnimatedStyle(() => ({
    flex: topValue.value
  }));
    
  const bottomAnimatedStyle = useAnimatedStyle(() => ({
    flex: bottomValue.value
  }));

  const expand = (top: number, bottom: number) => {
    topValue.value = withTiming(top, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    });
  };

  const expandToFull = () => expand(4, 6);
  const expandToMinimum = () => expand(6, 4);

  return { topAnimatedStyle, bottomAnimatedStyle, expandToFull, expandToMinimum };
}