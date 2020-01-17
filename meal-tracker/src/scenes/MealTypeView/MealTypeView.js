import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styles from "./MealTypeView.module.css";
import uuid from "uuid";
import { MealCard } from "../../components/index";
import {
  KeyboardBackspaceIcon,
  ControlPointIcon
} from "../../components/icons/icons";
import { MealsContext } from "../../contexts/mealsContext";

const MealTypeView = props => {
  const { mealType } = useContext(MealsContext);
  console.log(mealType);
  //przefiltrowane np sniadania na 10.01.2020
  const mealsOfTypeForDay = [
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

  const {
    wrapper,
    topBar,
    goBack,
    mealTypeNameClass,
    wholeMealTypeKcalClass,
    plusIcon
  } = styles;

  const mealTypeName = mealType;

  const wholeMealTypeKcal = () => {
    if (mealsOfTypeForDay.length) {
      console.log(mealsOfTypeForDay);
      let kcalSum = 0;
      mealsOfTypeForDay.forEach(e => {
        kcalSum += e.kcalValue;
      });
      return kcalSum;
    } else {
      return 0;
    }
  };
  const MealCards = props => {
    return (
      <div>
        {mealsOfTypeForDay.length
          ? mealsOfTypeForDay.map(object => {
              console.log(object);
              const {
                mealName: mealName1,
                ingredientsArray: ingredientsArray1,
                percetageArray: percetageArray1,
                kcalValue: kcalValue1,
                mealId: mealId1
              } = object;
              return (
                <MealCard
                  showBinIcon={true}
                  mealName={mealName1}
                  ingredientsArray={ingredientsArray1}
                  percetageArray={percetageArray1}
                  kcalValue={kcalValue1}
                  mealId={mealId1}
                  key={uuid()}
                />
              );
            })
          : null}
      </div>
    );
  };
  return (
    <div className={wrapper}>
      <div className={topBar}>
        <span className={goBack} onClick={handleArrowClick}>
          <KeyboardBackspaceIcon fontSize="large" />
        </span>
        <p className={mealTypeNameClass}>{mealTypeName}</p>
        <p className={wholeMealTypeKcalClass}>{wholeMealTypeKcal()} kcal</p>
      </div>
      <MealCards />
      <div className={plusIcon}>
        <ControlPointIcon fontSize="large" />
      </div>
    </div>
  );
};

export default withRouter(MealTypeView);
