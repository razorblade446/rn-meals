import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {ThumbColor, TrackColor} from '../platform/Helpers';
import DefaultText from './DefaultText';

const DefaultSwitch = (props: any) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText>{props.label}</DefaultText>
      <Switch trackColor={TrackColor}
              thumbColor={ThumbColor}
              {...props}/>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default DefaultSwitch;
