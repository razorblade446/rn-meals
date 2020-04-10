import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList, StatusBar, Platform
} from 'react-native';

import {ScreenStyle, TouchableImpl} from '../platform/Helpers';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = (props: any) => {

  const renderCategoryItem = (itemData: any) => {
    return (
      <TouchableImpl onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeals'});
      }}>
        <View style={styles.gridItem}>
          <Text>{itemData.item.name}</Text>
        </View>
      </TouchableImpl>);
  };

  return (
    <FlatList contentContainerStyle={styles.screen}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderCategoryItem}/>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyle,
    backgroundColor: 'red'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 115
  }
});

export default CategoriesScreen;
