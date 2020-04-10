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

enableScreens();

const CategoriesScreen = (props: any) => {

  const renderCategoryItem = (itemData: any) => {
    return (
      <View style={styles.gridItem}>
        <TouchableImpl onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals', params: {
              categoryId: itemData.item.id
            }
          });
        }}>
          <View style={styles.gridBox}>
            <Text>{itemData.item.name}</Text>
          </View>
        </TouchableImpl>
      </View>);
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
    ...ScreenStyle
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
