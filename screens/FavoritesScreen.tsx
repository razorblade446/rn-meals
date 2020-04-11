import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import CustomHeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props: any) => {
  const onSelectMeal = (mealId: string) => {
    props.navigation.navigate('MealDetail', {mealId});
  };

  return (
    <MealList meals={MEALS} onSelectMeal={onSelectMeal}/>
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

export default FavoritesScreen;
