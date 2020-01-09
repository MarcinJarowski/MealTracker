import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styles from "./MealTypeView.module.css";
import { KeyboardBackspaceIcon } from "../../components/icons/icons";
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
    wholeMealTypeKcalClass
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
    </div>
  );
};

export default withRouter(MealTypeView);
