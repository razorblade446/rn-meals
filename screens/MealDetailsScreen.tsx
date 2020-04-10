import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MEALS} from '../data/dummy-data';
import Meal from '../models/meal';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailsScreen = (props: any) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal: Meal | any = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen: {selectedMeal.title}</Text>
    </View>
  );
};

MealDetailsScreen.navigationOptions = (navigationData: any) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal: any = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Favorite' iconName='ios-star' onPress={() => {
        console.log('Fav pressed!');
      }}/>
    </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;
