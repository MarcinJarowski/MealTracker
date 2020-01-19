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
  const {
    mealType,
    mealsArrayByMealTime,
    findSelectedInMealSearchFromAllMeals,
    selectedFromSearch
  } = useContext(MealsContext);
  const [isMealSelected, setMealSelectedBool] = useState(false);
  //ogarnąć usuwanie stanu wybranego posiłku na klika wstecz
  const [mealTypeName, setMealTypeName] = useState(mealType.toLowerCase());
  const [inputValue, setInputValue] = useState("");
  const [isSearchOpenStatus, setSearchOpenStatus] = useState(false);

  useEffect(() => {
    console.log(selectedFromSearch);
    console.log(isMealSelected);
    if (selectedFromSearch && isMealSelected == false) {
      setMealSelectedBool(true);
    }
  }, [selectedFromSearch]);
  // console.log(isMealSelected);
  useEffect(() => {
    if (mealType.toLowerCase() === "kolacja") {
      setMealTypeName("kolację");
    }
  }, [mealType]);
  const handleBackArrowClick = event => {
    return props.history.goBack();
  };
  const handleInputChange = value => {
    setInputValue(value);
  };
  const handleSearchOpenStatus = () => {
    setSearchOpenStatus(!isSearchOpenStatus);
  };
  const handleForwardArrowClick = id => {
    console.log(id);
    setSearchOpenStatus(!isSearchOpenStatus);
    findSelectedInMealSearchFromAllMeals(id);
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
            onChange={e => e.preventDefault()}
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
            {mealsArrayByMealTime.map(meal => {
              const { mealName, kcalValue, id } = meal;
              const mealNameMaxChar = mealName.slice(0, 14);
              return (
                <li className={searchListLi} key={uuid()}>
                  <span className={imageWrapper}>
                    <img class={image} src={mealPicPlaceholder} alt="meal" />
                  </span>
                  <p className={searchMealName}>{mealNameMaxChar}...</p>
                  <span
                    className={goBack}
                    onClick={() => handleForwardArrowClick(id)}
                  >
                    <ArrowRightAltIcon fontSize="large" />
                  </span>
                </li>
              );
            })}
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
            mealName={selectedFromSearch.mealName}
            ingredientsArray={selectedFromSearch.ingredientsArray}
            percetageArray={selectedFromSearch.percetageArray}
            kcalValue={selectedFromSearch.kcalValue}
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
