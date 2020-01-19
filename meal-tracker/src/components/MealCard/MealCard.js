import React from "react";
import styles from "./MealCard.module.css";
import uuid from "uuid";

import { DeleteIcon } from "../../components/icons/icons";
import mealPicPlaceholder from "../../images/diet.png";

const MealCard = props => {
  const {
    mealName: mealName1 = "Przykładowy posiłek",
    ingredientsArray: ingredientsArray1 = ["składnik", "składnik", "składnik"],
    percetageArray: percetageArray1 = [30, 30, 40],
    kcalValue: kcalValue1 = [365],
    showBinIcon = false
  } = props;
  //   console.log(mealName1, ingredientsArray1, percetageArray1, kcalValue1);
  const {
    mealCard,
    binIcon,
    mealImgWrapper,
    mealImg,
    mealNameClass,
    ingredientsWrapper,
    fatCarbsWhey,
    mealKcal,
    ingredientClass,
    fatCarbsWheyLi
  } = styles;
  return (
    <div>
      <div className={mealCard}>
        {showBinIcon ? (
          <span
            className={binIcon}
            onClick={e => {
              //   wyniesc stan wyzej i usuwac z posilkow
            }}
          >
            <DeleteIcon fontSize="large" />
          </span>
        ) : null}
        <div className={mealImgWrapper}>
          <img
            className={mealImg}
            src={mealPicPlaceholder}
            alt="Zdjęcie posiłku"
          />
        </div>
        <h3 className={mealNameClass}>{mealName1}</h3>
        <ul className={ingredientsWrapper}>
          {ingredientsArray1.map(ingredient => {
            return (
              <li key={uuid()} className={ingredientClass}>
                {ingredient}
              </li>
            );
          })}
        </ul>
        <ul className={fatCarbsWhey}>
          {percetageArray1.map(percentNo => {
            return (
              <li key={uuid()} className={fatCarbsWheyLi}>
                {percentNo}%
              </li>
            );
          })}
        </ul>
        <p className={mealKcal}>{kcalValue1}kcal</p>
      </div>
    </div>
  );
};

export default MealCard;
