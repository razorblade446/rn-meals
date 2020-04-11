import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam('categoryId');
  const categoryMeals: any[] = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  const onSelectMeal = (mealId: string) => {
    props.navigation.navigate('MealDetails', {mealId});
  };

  return (
    <MealList meals={categoryMeals} onSelectMeal={onSelectMeal}/>
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
});

export default CategoryMealsScreen;
