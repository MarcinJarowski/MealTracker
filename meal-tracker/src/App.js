import React from "react";
import styles from "./index.css";
import { Navbar } from "./components/index";
import {
  MealsLibrary,
  Planner,
  ShoppingList,
  ProfilePage,
  MealTypeView,
  AddNewMeal
} from "./scenes";
import {
  Route,
  BrowserRouter as Router,
  Switch
  // Redirect
} from "react-router-dom";

const { appWrapper } = styles;

const App = props => {
  return (
    <Router>
      <div className={appWrapper}>
        <Navbar />
        <Switch>
          <Route exact path="/planer">
            <Planner />
          </Route>
          <Route exact path="/planer/pora-posilku">
            <MealTypeView />
          </Route>
          <Route exact path="/planer/dodaj-posilek">
            <AddNewMeal />
          </Route>
          <Route exact path="/posilki">
            <MealsLibrary />
          </Route>
          <Route exact path="/zakupy">
            <ShoppingList />
          </Route>
          <Route exact path="/profil">
            <ProfilePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
