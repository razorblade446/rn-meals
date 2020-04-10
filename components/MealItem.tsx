import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {TouchableImpl} from '../platform/Helpers';

const MealItem = (props: any) => {
  return (
    <View style={styles.mealItem}>
      <TouchableImpl onPress={() => props.onSelect(props.id)}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <Text>{props.duration} m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableImpl>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '80%'
  },
  mealDetails: {
    height: '20%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default MealItem;