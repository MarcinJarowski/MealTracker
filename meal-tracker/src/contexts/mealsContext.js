import React, { useState, createContext, useEffect } from "react";
import moment from "moment";
import uuid from "uuid";

export const MealsContext = createContext();

const MealsContextProvider = props => {
  //wszystkie dostepne posilki // tutaj bez daty //
  const meals = [
    {
      mealName: "Jajecznica",
      ingredientsArray: ["4 jajka", "cebula", "pomidory", "olej"],
      percetageArray: [25, 40, 30],
      kcalValue: 351,
      mealId: uuid()
    },
    {
      mealName: "Płatki owsiane",
      ingredientsArray: ["Płatki 100g", "mleko", "miód"],
      percetageArray: [60, 20, 20],
      kcalValue: 462,
      mealId: uuid()
    },
    {
      mealName: "Płatki owsiane",
      ingredientsArray: ["Płatki 100g", "mleko", "miód"],
      percetageArray: [60, 20, 20],
      kcalValue: 462,
      mealId: uuid()
    }
  ];
  const [breakfastMeals, setBreakFastMeals] = useState(meals);
  /////////////////////////////////////////////////////////////
  const addNewMeal = newMeal => {
    const updatedBreakfastMeals = [...breakfastMeals, newMeal];
  };
  ////////////////////////////////////
  const [mealType, setMealType] = useState("");

  const mealTypesNames = ["Śniadanie", "Obiad", "Kolacja"];

  ////////////////
  const [selectedMealId, setSelectedMealId] = React.useState();

  const [selectedMealObject, setSelectedMealObject] = useState({});
  const findSelectedMeal = () => {
    const mealObject = breakfastMeals.filter(meal => {
      if (meal.mealId == selectedMealId) {
        return meal;
      }
    });
    console.log(mealObject);
    setSelectedMealObject(mealObject);
  };
  useEffect(() => {
    findSelectedMeal();
  }, [selectedMealId]);
  return (
    <MealsContext.Provider
      value={{
        breakfastMeals,
        selectedMealId,
        setSelectedMealId,
        selectedMealObject,
        mealType,
        setMealType,
        mealTypesNames
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContextProvider;
