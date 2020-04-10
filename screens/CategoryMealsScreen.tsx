import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props: any) => {
  const catId = props.navigation.getParam('categoryId');
  const categoryMeals: any[] = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  const onSelectMeal = (mealId: string) => {
    props.navigation.navigate('MealDetails', {mealId});
  };

  const renderMealItem = (itemData: any) => {
    return (
      <MealItem {...itemData.item}
                onSelect={onSelectMeal}/>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={categoryMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%', padding: 10}}/>
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
