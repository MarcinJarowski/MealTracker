import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Planner.module.css";
import { DateNavigation, PieChartCircle } from "../../components/index";

const ProfilePage = props => {
  const { wrapper, pieChartSection, pieChartWrapper, pieChartInfo } = styles;
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
          <PieChartCircle />
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProfilePage);
