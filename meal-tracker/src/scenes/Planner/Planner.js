import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./Planner.module.css";
import { DateNavigation, PieChartCircle } from "../../components/index";

const ProfilePage = props => {
  const { wrapper, pieChartSection, pieChartWrapper, pieChartInfo } = styles;
  const chartData = [25, 35, 40];
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
    </div>
  );
};

export default withRouter(ProfilePage);
