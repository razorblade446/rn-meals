import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';

const MealList = (props: any) => {

  const onSelectMeal = (mealId: string) => {
    props.onSelectMeal(mealId);
  };

  const renderMealItem = (itemData: any) => {
    return (
      <MealItem {...itemData.item}
                onSelect={onSelectMeal}/>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList data={props.meals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%', padding: 10}}/>
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

export default MealList;