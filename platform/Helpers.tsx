import React from 'react';
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, Image, StatusBar} from 'react-native';
import Colors from '../constants/Colors';
import {BlurView} from 'expo-blur';

const touchableImplFn = () => {
  let component: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    component = TouchableNativeFeedback;
  }

  return component;
};

export const TouchableImpl = touchableImplFn();

const navigationOptionsFn = () => {
  const baseNavigationOptions = {
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    }
  };

  return Platform.select({
    ios: {
      ...baseNavigationOptions,
      headerTintColor: Colors.primaryColor,
      /*headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTransparent: true,
      headerBackground: () => <BlurView tint='light' intensity={50} style={StyleSheet.absoluteFill}/>*/
    },
    android: {
      ...baseNavigationOptions,
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
      /*headerTransparent: true,
      headerBackground: () => <BlurView tint='light' intensity={100} style={StyleSheet.absoluteFill}/>*/
    }
  });
};

export const NavigationOptions = navigationOptionsFn();

const navigationTabOptionsFn = () => {
  return {
    labelStyle: {
      fontFamily: 'open-sans'
    },
    activeTintColor: Colors.accentColor
  }
};

export const NavigationTabOptions = navigationTabOptionsFn();

const screenStyleFn = () => {
  console.log('Header: ', StatusBar.currentHeight);
  let baseStyle: any = {
    // flex: 1
    // paddingTop: StatusBar.currentHeight
  };

  /*if (Platform.OS === 'ios') {
    baseStyle = {
      ...baseStyle,
      paddingTop: 60
    };
  }*/

  return baseStyle;
};

export const ScreenStyle = screenStyleFn();

const thumbColorFn = () => {
  return Platform.OS === 'android' ? Colors.primaryColor : ''
}

export const ThumbColor = thumbColorFn();

const trackColorFn = () => {
  return Platform.select({
    ios: {
      false: '',
      true: Colors.primaryColor
    },
    android: {
      false: Colors.primaryLightGrayedColor,
      true: Colors.primaryGrayedColor
    }
  });
}

export const TrackColor = trackColorFn();
