import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import Meal from '../models/meal';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = (props: any) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
}

const MealDetailsScreen = (props: any) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal: Meal | any = MEALS.find(meal => meal.id === mealId);

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
