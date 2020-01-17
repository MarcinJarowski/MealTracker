import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./AddNewMeal.module.css";
import uuid from "uuid";
import { MealCard, Search } from "../../components/index";
import { KeyboardBackspaceIcon } from "../../components/icons/icons";
import { MealsContext } from "../../contexts/mealsContext";

const AddNewMeal = props => {
  const { selectedMealObject, mealType } = useContext(MealsContext);
  const [isMealSelected, setMealSelectedBool] = useState(false);

  useEffect(() => {
    if (selectedMealObject[0] !== undefined) {
      setMealSelectedBool(true);
    }
  }, [selectedMealObject]);

  const [mealTypeName, setMealTypeName] = useState(mealType.toLowerCase());

  useEffect(() => {
    if (mealType.toLowerCase() === "kolacja") {
      setMealTypeName("kolację");
    }
  }, [mealType]);
  // console.log(mealTypeName);
  const handleArrowClick = event => {
    return props.history.goBack();
  };

  const {
    wrapper,
    topBar,
    goBack,
    mealTypeNameClass,
    makeMealBtn,
    searchOrAddWrapper
  } = styles;

  return (
    <div className={wrapper}>
      <div className={topBar}>
        <span className={goBack} onClick={handleArrowClick}>
          <KeyboardBackspaceIcon fontSize="large" />
        </span>
        <span className={mealTypeNameClass}>
          <p>Dodaj {mealTypeName}</p>
        </span>
      </div>
      <div className={searchOrAddWrapper}>
        <Search />
        <p>lub</p>
        <button className={makeMealBtn}>Stwórz własny posiłek</button>
      </div>
      <div>
        {isMealSelected ? (
          <MealCard
            key={uuid()}
            mealName={selectedMealObject[0].mealName}
            ingredientsArray={selectedMealObject[0].ingredientsArray}
            percetageArray={selectedMealObject[0].percetageArray}
            kcalValue={selectedMealObject[0].kcalValue}
          />
        ) : (
          <MealCard />
        )}
      </div>
      <button className={makeMealBtn}>Dodaj do planu</button>
    </div>
  );
};

export default withRouter(AddNewMeal);
