import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList, StatusBar, Platform
} from 'react-native';
import {enableScreens} from 'react-native-screens';

import {ScreenStyle, TouchableImpl} from '../platform/Helpers';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

enableScreens();

const CategoriesScreen = (props: any) => {
  const onSelect = (categoryId: string) => {
    props.navigation.navigate({
      routeName: 'CategoryMeals', params: {categoryId}
    });
  };

  const renderCategoryItem = (itemData: any) => {
    return (
      <CategoryGridTile {...itemData.item}
                        onSelect={onSelect}/>);
  };

  return (
    <FlatList data={CATEGORIES}
              numColumns={2}
              renderItem={renderCategoryItem}/>
  );
};

CategoriesScreen.navigationOptions = (navigationData: any) => {
  return {
    headerTitle: 'Meal Categories'
  };
};

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyle,
    flex: 1,
    backgroundColor: 'red'
  },
  gridItem: {
    flex: 1,
    margin: 10,
    height: 115
  },
  gridBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  }
});

export default CategoriesScreen;
