import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.container}>
        <DefaultText style={styles.contentText}>
          No meals found. Maybe check your filters?
        </DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryTitle = navigationData.navigation.getParam("categoryTitle");

  return {
    headerTitle: categoryTitle
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  contentText: {
    fontSize: 20
  }
});

export default CategoryMealsScreen;
