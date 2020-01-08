import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  MenuIcon,
  AccountCircle,
  KeyboardBackspaceIcon,
  KitchenIcon,
  ShoppingCartIcon,
  MenuBookIcon,
  PowerSettingsNewIcon
} from "../icons/icons.js";

const Navbar = props => {
  const {
    navbarTopBar,
    menuIcon,
    name,
    nameAndPhoto,
    photoWrapper,
    navbarWrapper,
    navbarMenuExpanded,
    navbarMenuExpandedTrue,
    navbarMenuExpandedTopBar,
    arrowBack,
    appName,
    menu,
    menuItem,
    menuItemIcon,
    menuItemName,
    logOutButton,
    logOutIcon,
    logOutText,
    menuItemActive
  } = styles;

  const [navbarOpenStatus, setNavbarOpenStatus] = useState(false);
  const [windowPath, setWindowPath] = useState(props.location.pathname);

  useEffect(() => {
    const path = props.location.pathname;
    console.log(path);
    setWindowPath(path);
  }, [props.location.pathname]);
  return (
    <div className={navbarWrapper}>
      <div className={navbarTopBar}>
        <div
          className={menuIcon}
          onClick={() => {
            setNavbarOpenStatus(!navbarOpenStatus);
          }}
        >
          <MenuIcon fontSize="large" />
        </div>
        <div className={nameAndPhoto}>
          <p className={name}>Witaj użytkowniku!</p>
          <span className={photoWrapper}>
            <AccountCircle fontSize="large" />
          </span>
        </div>
      </div>
      <div
        className={`${
          navbarOpenStatus ? navbarMenuExpandedTrue : `${navbarMenuExpanded}`
        }`}
      >
        <div className={navbarMenuExpandedTopBar}>
          <span
            className={arrowBack}
            onClick={() => setNavbarOpenStatus(false)}
          >
            <KeyboardBackspaceIcon fontSize="large" />
          </span>
          <p className={appName}>MealTracker</p>
        </div>
        <ul className={menu}>
          <li>
            <NavLink
              onClick={() => setNavbarOpenStatus(false)}
              className={
                windowPath === "/planer" ? `${menuItemActive}` : `${menuItem}`
              }
              exact
              to="/planer"
            >
              <span className={menuItemIcon}>
                <KitchenIcon fontSize="large" />
              </span>
              <p className={menuItemName}>Planer</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setNavbarOpenStatus(false)}
              className={
                windowPath === "/zakupy" ? `${menuItemActive}` : `${menuItem}`
              }
              exact
              to="/zakupy"
            >
              <span className={menuItemIcon}>
                <ShoppingCartIcon fontSize="large" />
              </span>
              <p className={menuItemName}>Zakupy</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setNavbarOpenStatus(false)}
              className={
                windowPath === "/posilki" ? `${menuItemActive}` : `${menuItem}`
              }
              exact
              to="/posilki"
            >
              <span className={menuItemIcon}>
                <MenuBookIcon fontSize="large" />
              </span>
              <p className={menuItemName}>Posiłki</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setNavbarOpenStatus(false)}
              className={
                windowPath === "/profil" ? `${menuItemActive}` : `${menuItem}`
              }
              exact
              to="/profil"
            >
              <span className={menuItemIcon}>
                <AccountCircle fontSize="large" />
              </span>
              <p className={menuItemName}>Profil</p>
            </NavLink>
          </li>
        </ul>
        <button className={logOutButton}>
          <span className={logOutIcon}>
            <PowerSettingsNewIcon fontSize="large" />
          </span>
          <p className={logOutText}>Wyloguj</p>
        </button>
      </div>
    </div>
  );
};

export default withRouter(Navbar);
