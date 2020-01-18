import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./AddNewMeal.module.css";
import uuid from "uuid";
import { MealCard, Search } from "../../components/index";
import {
  KeyboardBackspaceIcon,
  SearchIcon,
  ArrowRightAltIcon
} from "../../components/icons/icons";
import { MealsContext } from "../../contexts/mealsContext";
import mealPicPlaceholder from "../../images/diet.png";

const AddNewMeal = props => {
  const { selectedMealObject, mealType } = useContext(MealsContext);
  const [isMealSelected, setMealSelectedBool] = useState(false);
  const [mealTypeName, setMealTypeName] = useState(mealType.toLowerCase());
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpenStatus, setSearchOpenStatus] = useState(false);

  useEffect(() => {
    if (selectedMealObject[0] !== undefined) {
      setMealSelectedBool(true);
    }
  }, [selectedMealObject]);

  useEffect(() => {
    if (mealType.toLowerCase() === "kolacja") {
      setMealTypeName("kolację");
    }
  }, [mealType]);
  // console.log(mealTypeName);
  const handleBackArrowClick = event => {
    return props.history.goBack();
  };
  const handleInputChange = value => {
    setInputValue(value);
  };
  const handleSearchOpenStatus = () => {
    setSearchOpenStatus(!isSearchOpenStatus);
  };
  const handleForwardArrowClick = () => {
    setSearchOpenStatus(!isSearchOpenStatus);
  };
  const {
    wrapper,
    topBar,
    goBack,
    mealTypeNameClass,
    makeMealBtn,
    searchInput,
    search,
    searchIconClass,
    searchList,
    searchListWrapper,
    searchListLi,
    searchWrapper,
    orAddCustomWrapper,
    image,
    imageWrapper,
    searchMealName,
    searchListWrapperExpanded,
    boxShadow
  } = styles;
  //  wyjebać ustawianie klasy na open searcha to sie zrenderuje//
  return (
    <div className={wrapper}>
      <div className={topBar}>
        <span className={goBack} onClick={handleBackArrowClick}>
          <KeyboardBackspaceIcon fontSize="large" />
        </span>
        <span className={mealTypeNameClass}>
          <p>Dodaj {mealTypeName}</p>
        </span>
      </div>
      <div className={searchWrapper}>
        <div className={isSearchOpenStatus ? `${search} ${boxShadow}` : search}>
          <input
            className={searchInput}
            value={inputValue}
            placeholder="Wyszukaj..."
            onChange={e => handleInputChange(e.target.value)}
            onClick={() =>
              !isSearchOpenStatus ? handleSearchOpenStatus() : null
            }
          />
          <span
            className={searchIconClass}
            onClick={() => handleSearchOpenStatus()}
          >
            <SearchIcon />
          </span>
        </div>
        <div
          className={
            isSearchOpenStatus ? searchListWrapperExpanded : searchListWrapper
          }
        >
          <ul className={searchList}>
            <li className={searchListLi}>
              <span className={imageWrapper}>
                <img class={image} src={mealPicPlaceholder} alt="meal" />
              </span>
              <p className={searchMealName}>Nazwa posiłku</p>
              <span
                className={goBack}
                onClick={() => handleForwardArrowClick()}
              >
                <ArrowRightAltIcon fontSize="large" />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={orAddCustomWrapper}>
        <p>lub</p>
        <button className={makeMealBtn}>Stwórz własny posiłek</button>
      </div>

      <div>
        {isMealSelected ? (
          <MealCard
            key={uuid()}
            mealName={selectedMealObject[0].mealName}
            ingredientsArray={selectedMealObject[0].ingredientsArray}
            percetageArray={selectedMealObject[0].percetageArray}
            kcalValue={selectedMealObject[0].kcalValue}
          />
        ) : (
          <MealCard />
        )}
      </div>
      <button className={makeMealBtn}>Dodaj do planu</button>
    </div>
  );
};

export default withRouter(AddNewMeal);
