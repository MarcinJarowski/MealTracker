import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import {
  MenuIcon,
  AccountCircle,
  KeyboardBackspaceIcon,
  KitchenIcon,
  ShoppingCartIcon,
  LocalLibraryIcon,
  PowerSettingsNewIcon
} from "../icons/icons.js";
// style={{ color: "blue" }} dodawanie do icon styli
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
  useEffect(() => {}, [navbarOpenStatus]);
  //   const classNameOpen = `${navbarMenuExpanded} ${navbarMenuExpandedTrue}`;
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
          navbarOpenStatus ? navbarMenuExpandedTrue : navbarMenuExpanded
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
          <li className={menuItemActive}>
            <span className={menuItemIcon}>
              <KitchenIcon fontSize="large" />
            </span>
            <p className={menuItemName}>Planer</p>
          </li>
          <li className={menuItem}>
            <span className={menuItemIcon}>
              <ShoppingCartIcon fontSize="large" />
            </span>
            <p className={menuItemName}>Zakupy</p>
          </li>
          <li className={menuItem}>
            <span className={menuItemIcon}>
              <LocalLibraryIcon fontSize="large" />
            </span>
            <p className={menuItemName}>Posiłki</p>
          </li>
          <li className={menuItem}>
            <span className={menuItemIcon}>
              <AccountCircle fontSize="large" />
            </span>
            <p className={menuItemName}>Profil</p>
          </li>
        </ul>
        <button className={logOutButton}>
          <span className={logOutIcon}>
            <PowerSettingsNewIcon fontSize="medium" />
          </span>
          <p className={logOutText}>Wyloguj</p>
        </button>
      </div>
    </div>
  );
};
// `${navbarOpenStatus ? classNameOpen : navbarMenuExpanded}`;
export default Navbar;
