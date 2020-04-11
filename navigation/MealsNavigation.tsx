import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

import MealDetailsScreen from '../screens/MealDetailsScreen';

import {NavigationOptions, NavigationTabOptions} from '../platform/Helpers';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import FiltersScreen from '../screens/FiltersScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: NavigationOptions
  });

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: NavigationOptions
  });

const tabScreenRoutes = {
  MealsTab: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo: any) => {
        return <Ionicons name='ios-restaurant'
                         size={25}
                         color={tabInfo.tintColor}/>;
      }
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo: any) => {
        return <Ionicons name='ios-star'
                         size={25}
                         color={tabInfo.tintColor}/>;
      }
    }
  }
};

const tabScreenConfig = Platform.select({
  ios: {
    tabBarOptions: NavigationTabOptions
  },
  android: {
    activeColor: 'white',
    barStyle: {
      backgroundColor: Colors.primaryColor
    },
    shifting: false
  }
});

const creationMethod = Platform.OS === 'android' ? createMaterialBottomTabNavigator : createBottomTabNavigator;

const MealsFavoriteNavigator = creationMethod(
  tabScreenRoutes,
  tabScreenConfig
);

const drawerOptions = {
  contentOptions: {
    activeTintColor: Colors.primaryColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
};

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: NavigationOptions
  });

const MainNavigator = createDrawerNavigator({
  MealsMain: {
    screen: MealsFavoriteNavigator,
    navigationOptions: {
      drawerLabel: 'Meal Categories'
    }
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: 'Filters'
    }
  }
},
  drawerOptions
);

export default createAppContainer(MainNavigator);
