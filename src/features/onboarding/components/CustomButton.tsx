import {FlatList, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

interface CustomButtonProps {
  flatListRef: React.RefObject<FlatList<any>>;
  flatListIndex: SharedValue<number>;
  dataLength: number;
}

const CustomButton = ({flatListRef, flatListIndex, dataLength}: CustomButtonProps) => {
  const navigation = useNavigation();

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withSpring(140)
          : withSpring(60),
      height: 60,
    };
  });
  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });
  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current.scrollToIndex({index: flatListIndex.value + 1});
        } else {
          navigation.goBack();
        }
      }}>
      <Animated.View style={[styles.container, buttonAnimationStyle]}>
        <Animated.Text style={[styles.textButton, textAnimationStyle]}>
          Khám phá ngay
        </Animated.Text>
        <Animated.Image
          source={require('../../../assets/images/onboarding/ArrowIcon.png')}
          style={[styles.arrow, arrowAnimationStyle]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  arrow: {
    position: 'absolute',
  },
  textButton: {color: 'white', fontSize: 16, position: 'absolute'},
});