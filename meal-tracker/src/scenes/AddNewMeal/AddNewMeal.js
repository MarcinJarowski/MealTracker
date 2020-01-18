import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./AddNewMeal.module.css";
import uuid from "uuid";
import { MealCard } from "../../components/index";
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
  const handleArrowClick = event => {
    return props.history.goBack();
  };
  const handleInputChange = value => {
    setInputValue(value);
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
    searchListWrapperExpanded
  } = styles;
  //  wyjebać ustawianie klasy na open searcha to sie zrenderuje//
  return (
    <div className={wrapper}>
      <div className={topBar}>
        <span className={goBack} onClick={handleArrowClick}>
          <KeyboardBackspaceIcon fontSize="large" />
        </span>
        <span className={mealTypeNameClass}>
          <p>Dodaj {mealTypeName}</p>
        </span>
      </div>
      {/* <Search /> */}
      <div className={searchWrapper}>
        <div className={search}>
          <input
            className={searchInput}
            value={inputValue}
            placeholder="Wyszukaj..."
            onChange={e => handleInputChange(e.target.value)}
          />
          <span className={searchIconClass} onClick={setSearchOpenStatus(true)}>
            <SearchIcon />
          </span>
        </div>
        <div className={`${searchListWrapper} ${searchListWrapperExpanded}`}>
          <ul className={searchList}>
            <li className={searchListLi}>
              <span className={imageWrapper}>
                <img class={image} src={mealPicPlaceholder} alt="meal" />
              </span>
              <p className={searchMealName}>Nazwa posiłku</p>
              <span className={goBack}>
                <ArrowRightAltIcon fontSize="large" />
              </span>
            </li>
            <li className={searchListLi}>
              <span className={imageWrapper}>
                <img class={image} src={mealPicPlaceholder} alt="meal" />
              </span>
              <p className={searchMealName}>Nazwa posiłku</p>
              <span className={goBack}>
                <ArrowRightAltIcon fontSize="large" />
              </span>
            </li>
            <li className={searchListLi}>
              <span className={imageWrapper}>
                <img class={image} src={mealPicPlaceholder} alt="meal" />
              </span>
              <p className={searchMealName}>Nazwa posiłku</p>
              <span className={goBack}>
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
