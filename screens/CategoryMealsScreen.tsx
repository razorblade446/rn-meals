import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';
import Meal from '../models/meal';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = (props: any) => {
  const categoryId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(
    (state: any) => state.meals.filteredMeals.filter(
      (meal: Meal) => meal.categoryIds.indexOf(categoryId) >= 0));
  const favoriteMeals = useSelector((state: any) => state.meals.favoriteMeals);

  const onSelectMeal = (mealId: string, mealTitle: string) => {
    const isFavoriteMeal = favoriteMeals.some((meal: Meal) => meal.id === mealId);
    props.navigation.navigate('MealDetails', {mealId, mealTitle, isFavoriteMeal});
  };

  if (availableMeals.length === 0 || !availableMeals) {
    return (<View style={styles.screen}>
      <DefaultText>No meals found, try to remove some filters</DefaultText>
    </View>)
  }

  return (
    <MealList meals={availableMeals} onSelectMeal={onSelectMeal}/>
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
