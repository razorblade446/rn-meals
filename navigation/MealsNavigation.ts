import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import {NavigationOptions} from '../platform/Helpers';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: NavigationOptions
  });

export default createAppContainer(MealsNavigator);
