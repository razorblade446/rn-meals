import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

const buttonColor = Platform.OS === 'android' ? 'white' : Colors.primaryColor;

const CustomHeaderButton = (props: any) => {
  return <HeaderButton {...props}
                       IconComponent={Ionicons}
                       iconSize={23}
                       color={buttonColor}/>;
}

export default CustomHeaderButton;
