import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CategoryMealsScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
