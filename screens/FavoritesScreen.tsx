import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = (props: any) => {
  const availableMeals = useSelector((state: any) => state.meals.favoriteMeals);

  const onSelectMeal = (mealId: string, mealTitle: string) => {
    props.navigation.navigate('MealDetail', {mealId, mealTitle, isFavoriteMeal: true});
  };

  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={styles.screen}>
        <DefaultText>No Favorites selected, start and add something...</DefaultText>
      </View>
    );
  }

  return (
    <MealList meals={availableMeals} onSelectMeal={onSelectMeal}/>
  );
};

FavoritesScreen.navigationOptions = (navigationData: any) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => {
        navigationData.navigation.toggleDrawer();
      }}/>
    </HeaderButtons>
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
