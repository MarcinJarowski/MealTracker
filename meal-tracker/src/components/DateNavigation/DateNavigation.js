import React, { useContext } from "react";
import styles from "./DateNavigation.module.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { DateContext } from "../../contexts/dateContext";

import "moment/locale/pl";

const {
  mainContainer,
  arrowLeft,
  arrowRight,
  selectedDay,
  datePTag,
  dateBox
} = styles;

const DateNavigation = props => {
  const { date, changeDate } = useContext(DateContext);
  return (
    <div className={mainContainer}>
      <span className={arrowLeft}>
        <KeyboardArrowLeft
          fontSize="large"
          color="inherit"
          onClick={() => {
            let prevDate = date.clone().subtract(1, "days");
            changeDate(prevDate);
          }}
        />
      </span>
      <div className={dateBox}>
        <span className={selectedDay}>
          <p className={datePTag}>{date.format("dddd")}</p>
          <p className={datePTag}>{date.format("ll")}</p>
        </span>
      </div>
      <span className={arrowRight}>
        <KeyboardArrowRight
          fontSize="large"
          color="inherit"
          onClick={() => {
            let nextDate = date.clone().add(1, "days");
            changeDate(nextDate);
          }}
        />
      </span>
    </div>
  );
};

export default DateNavigation;
