import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory: any = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen</Text>
      <Text>{selectedCategory.name}</Text>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData: any) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory: any = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.name
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;
