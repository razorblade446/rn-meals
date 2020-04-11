import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import DefaultSwitch from '../components/DefaultSwitch';

const FiltersScreen = (props: any) => {
  const {navigation} = props;
  const [glutenFree, setGlutenFree] = useState(false);
  const [lactoseFree, setLactoseFree] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree,
      lactoseFree,
      vegetarian,
      vegan
    };

    console.log('Applied Filters: ', appliedFilters);
  }, [glutenFree, lactoseFree, vegetarian, vegan]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Available Filters</DefaultText>
      <DefaultSwitch label='Gluten-Free'
                     value={glutenFree}
                     onValueChange={(value: any) => setGlutenFree(value)}/>
      <DefaultSwitch label='Lactose-Free'
                     value={lactoseFree}
                     onValueChange={(value: any) => setLactoseFree(value)}/>
      <DefaultSwitch label='Vegetarian'
                     value={vegetarian}
                     onValueChange={(value: any) => setVegetarian(value)}/>
      <DefaultSwitch label='Vegan'
                     value={vegan}
                     onValueChange={(value: any) => setVegan(value)}/>
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData: any) => {
  return {
    headerTitle: 'Filters',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Menu" iconName='ios-menu' onPress={() => {
        navigationData.navigation.toggleDrawer();
      }}/>
    </HeaderButtons>,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Save' iconName='ios-save' onPress={navigationData.navigation.getParam('save')}/>
    </HeaderButtons>
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});

export default FiltersScreen;
