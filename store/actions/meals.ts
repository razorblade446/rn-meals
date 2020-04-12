export const MealsActionType = {
    TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
    SET_FILTERS: 'SET_FILTERS'
}

export const toggleFavoriteAction = (mealId: string) => {
    return {type: MealsActionType.TOGGLE_FAVORITE, mealId};
};

export const setFiltersAction = (filterSettings: any) => {
    return {type: MealsActionType.SET_FILTERS, filterSettings};
};
