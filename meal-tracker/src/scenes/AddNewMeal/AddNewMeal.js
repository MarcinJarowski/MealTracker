import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./AddNewMeal.module.css";
import uuid from "uuid";
import { MealCard, Search } from "../../components/index";
import {
  KeyboardBackspaceIcon,
  SearchIcon
} from "../../components/icons/icons";
import { ButtonsContext } from "../../contexts/buttonsContext";

const AddNewMeal = props => {
  const { mealType } = useContext(ButtonsContext);
  const [mealTypeName, setMealTypeName] = useState(mealType.toLowerCase());
  useEffect(() => {
    if (mealType.toLowerCase() === "kolacja") {
      setMealTypeName("kolację");
    }
  });
  console.log(mealTypeName);
  const mealsOfTypeAll = [
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
    },
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
    },
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
  const handleArrowClick = event => {
    props.history.goBack();
  };

  const { wrapper, topBar, goBack, mealTypeNameClass } = styles;

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
      <Search />
    </div>
  );
};

export default withRouter(AddNewMeal);
