import Meal from '../../models/meal';
import {MEALS} from '../../data/dummy-data';
import {MealsActionType} from '../actions/meals';

export interface MealsState {
  meals: Meal[],
  filteredMeals: Meal[],
  favoriteMeals: Meal[]
}

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

export const mealsReducer = (state: MealsState = initialState, action: any) => {
  switch (action.type) {
    case MealsActionType.TOGGLE_FAVORITE: {
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (existingIndex >= 0) {
        const updatedFav = [...state.favoriteMeals];
        updatedFav.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFav
        }
      } else {
        const favMeal = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: [...state.favoriteMeals, favMeal]
        }
      }
    }

    case MealsActionType.SET_FILTERS: {
      const filters = action.filterSettings;
      const filteredMeals = state.meals.filter((meal: Meal) => {
        if (filters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (filters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (filters.vegetarian && !meal.isVegetarian) {
          return false;
        }

        if (filters.vegan && !meal.isVegan) {
          return false
        }

        return true;
      });

      return {
        ...state,
        filteredMeals
      };
    }
    default:
      return state;
  }
}
