import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Planner.module.css";
import { DateNavigation } from "../../components/index";

const ProfilePage = props => {
  const { wrapper, dateNavigationWrapper } = styles;
  return (
    <div className={wrapper}>
      <DateNavigation className={dateNavigationWrapper} />
    </div>
  );
};

export default withRouter(ProfilePage);
