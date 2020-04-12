import React, {useCallback, useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import Meal from '../models/meal';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavoriteAction} from '../store/actions/meals';

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
}

const MealDetailsScreen = (props: any) => {
  const availableMeals: Meal[] = useSelector((state: any) => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const isFavoriteMeal = useSelector(
    (state: any) => state.meals.favoriteMeals.some((meal: Meal) => meal.id === mealId));

  const selectedMeal: Meal | any = availableMeals.find(meal => meal.id === mealId);

  const dispatchToggle = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatchToggle(toggleFavoriteAction(mealId));
  }, [dispatchToggle, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFavorite: toggleFavHandler});
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({isFavoriteMeal});
  }, [isFavoriteMeal]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.mealImage}/>
      <View style={styles.mealDetails}>
        <DefaultText>{selectedMeal.duration} m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <DefaultText style={styles.title}>Ingredients</DefaultText>
      {selectedMeal.ingredients.map((ingredient: any) =>
        <ListItem key={ingredient}>{ingredient}</ListItem>)}
      <DefaultText style={styles.title}>Steps</DefaultText>
      {selectedMeal.steps.map((step: any) =>
        <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData: any) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
  const isFavoriteMeal = navigationData.navigation.getParam('isFavoriteMeal');

  const icon = isFavoriteMeal ? 'ios-star' : 'ios-star-outline';

  return {
    headerTitle: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Favorite' iconName={icon} onPress={toggleFavorite}/>
    </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  mealImage: {
    width: '100%',
    height: 200
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  mealDetails: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;
