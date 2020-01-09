import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styles from "./MealTypeView.module.css";
import mealPicPlaceholder from "../../images/diet.png";
import {
  KeyboardBackspaceIcon,
  DeleteIcon,
  ControlPointIcon
} from "../../components/icons/icons";
import { ButtonsContext } from "../../contexts/buttonsContext";

const MealTypeView = props => {
  const { mealType } = useContext(ButtonsContext);

  const handleArrowClick = event => {
    props.history.goBack();
  };

  const {
    wrapper,
    topBar,
    goBack,
    mealTypeNameClass,
    wholeMealTypeKcalClass,
    mealCard,
    binIcon,
    mealImgWrapper,
    mealImg,
    mealName,
    ingredientsWrapper,
    fatCarbsWhey,
    mealKcal,
    plusIcon,
    ingredient,
    fatCarbsWheyLi
  } = styles;

  const mealTypeName = mealType;
  const wholeMealTypeKcal = 567;

  return (
    <div className={wrapper}>
      <div className={topBar}>
        <span className={goBack} onClick={handleArrowClick}>
          <KeyboardBackspaceIcon fontSize="large" />
        </span>
        <p className={mealTypeNameClass}>{mealTypeName}</p>
        <p className={wholeMealTypeKcalClass}>{wholeMealTypeKcal} kcal</p>
      </div>
      <div className={mealCard}>
        <span className={binIcon}>
          <DeleteIcon fontSize="large" />
        </span>
        <div className={mealImgWrapper}>
          <img
            className={mealImg}
            src={mealPicPlaceholder}
            alt="Zdjęcie posiłku"
          />
        </div>
        <h3 className={mealName}>posiłek</h3>
        <ul className={ingredientsWrapper}>
          <li className={ingredient}>sałata lodowa</li>
          <li className={ingredient}>pomidory</li>
          <li className={ingredient}>oliwa</li>
          <li className={ingredient}>przyprawy</li>
          <li className={ingredient}>smażony kurczak</li>
        </ul>
        <ul className={fatCarbsWhey}>
          <li className={fatCarbsWheyLi}>40%</li>
          <li className={fatCarbsWheyLi}>30%</li>
          <li className={fatCarbsWheyLi}>40%</li>
        </ul>
        <p className={mealKcal}>246kcal</p>
      </div>
      <div className={plusIcon}>
        <ControlPointIcon fontSize="large" />
      </div>
    </div>
  );
};

export default withRouter(MealTypeView);
