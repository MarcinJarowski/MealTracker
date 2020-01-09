import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Planner.module.css";
import { ButtonsContext } from "../../contexts/buttonsContext";

import {
  DoneIcon,
  HelpOutlineIcon,
  CreateIcon,
  ControlPointIcon
} from "../../components/icons/icons.js";

import { DateNavigation, PieChartCircle } from "../../components/index";

const Planner = props => {
  const { setMealType, mealTypesNames } = useContext(ButtonsContext);
  console.log(props);
  console.log(mealTypesNames);
  const handleButtonClick = mealTypeName => {
    props.history.push(props.location.pathname + "/pora-posilku");
    setMealType(mealTypeName);
  };
  const {
    wrapper,
    pieChartSection,
    pieChartWrapper,
    pieChartInfo,
    btnIconOne,
    btnIconTwo,
    buttonsWrapper,
    plannerBtn,
    btnText
  } = styles;
  const chartData = [25, 35, 40];
  const breakfast = ["randomdata"];
  const dinner = ["as"];
  const supper = ["asd"];

  return (
    <div className={wrapper}>
      <DateNavigation />
      <div className={pieChartSection}>
        <ul className={pieChartInfo}>
          <li>Węglowodany</li>
          <li>Tłuszcze</li>
          <li>Białka</li>
        </ul>
        <div className={pieChartWrapper}>
          <PieChartCircle chartData={chartData} />
        </div>
      </div>
      <div className={buttonsWrapper}>
        <button className={plannerBtn}>
          {breakfast.length ? (
            <span className={btnIconOne}>
              <DoneIcon />
            </span>
          ) : (
            <span className={btnIconTwo}>
              <HelpOutlineIcon />
            </span>
          )}

          <p className={btnText}>Śniadanie</p>
          {breakfast.length ? (
            <span
              className={btnIconTwo}
              onClick={() => handleButtonClick(mealTypesNames[0])}
            >
              <CreateIcon />
            </span>
          ) : (
            <span className={btnIconTwo}>
              <ControlPointIcon />
            </span>
          )}
        </button>
        <button className={plannerBtn}>
          {dinner.length ? (
            <span className={btnIconOne}>
              <DoneIcon />
            </span>
          ) : (
            <span className={btnIconTwo}></span>
          )}

          <p className={btnText}>Obiad</p>
          {dinner.length ? (
            <span
              className={btnIconTwo}
              onClick={() => handleButtonClick(mealTypesNames[1])}
            >
              <CreateIcon />
            </span>
          ) : (
            <span className={btnIconTwo}>
              <ControlPointIcon />
            </span>
          )}
        </button>
        <button className={plannerBtn}>
          {supper.length ? (
            <span className={btnIconOne}>
              <DoneIcon />
            </span>
          ) : (
            <span className={btnIconTwo}></span>
          )}

          <p className={btnText}>Kolacja</p>
          {supper.length ? (
            <span
              className={btnIconTwo}
              onClick={() => handleButtonClick(mealTypesNames[2])}
            >
              <CreateIcon />
            </span>
          ) : (
            <span className={btnIconTwo}>
              <ControlPointIcon />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default withRouter(Planner);
