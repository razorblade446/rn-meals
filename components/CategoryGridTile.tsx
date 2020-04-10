import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {TouchableImpl} from '../platform/Helpers';

const CategoryGridTile = (props: any) => {
  return (
    <View style={styles.gridItem}>
      <TouchableImpl style={{flex: 1}} onPress={() => props.onSelect(props.id)}>
        <View style={{...styles.gridBox, backgroundColor: props.color}}>
          <Text style={styles.title} numberOfLines={2}>{props.name}</Text>
        </View>
      </TouchableImpl>
    </View>);
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 115,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden': 'visible',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0, height: 2
    },
    shadowRadius: 3,
    elevation: 3,
  },
  gridBox: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    overflow: 'hidden'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});

export default CategoryGridTile;