import React, { useState, createContext, useEffect } from "react";
// import moment from "moment";
import uuid from "uuid";

export const MealsContext = createContext();

const MealsContextProvider = props => {
  //wszystkie dostepne posilki // tutaj bez daty //
  let basicMealsJSON = {
    mealsArray: [
      {
        kcalValue: 390,
        id: 1,
        mealName: "Jajecznica i pieczywo",
        type: "śniadanie"
      },
      {
        kcalValue: 421,
        id: 2,
        mealName: "Wrap z jajkiem i bekonem",
        type: "śniadanie"
      },
      {
        kcalValue: 327,
        id: 3,
        mealName: "Placki owsiane z cukinia",
        type: "kolacja"
      },
      {
        kcalValue: 250,
        id: 4,
        mealName: "Pasta borkułowa z feta i pieczywo",
        type: "kolacja"
      },
      {
        kcalValue: 326,
        id: 5,
        mealName: "Sałatka z pomidorami i rukolą",
        type: "kolacja"
      },
      {
        kcalValue: 248,
        id: 6,
        mealName: "Koktajl szpinakowo-bananowy",
        type: "śniadanie"
      },
      {
        kcalValue: 198,
        id: 7,
        mealName: "Koktajl bananowo-gruszkowy",
        type: "śniadanie"
      },
      {
        kcalValue: 227,
        id: 8,
        mealName: "Budyń kakaowy z orzechami",
        type: "śniadanie"
      },
      {
        kcalValue: 373,
        id: 9,
        mealName: "Sałatka z brokułami, serem i jajkiem",
        type: "kolacja"
      },
      {
        kcalValue: 587,
        id: 10,
        mealName: "Makaron z kurczakiem w sosie śmietanowym",
        type: "obiad"
      },
      {
        kcalValue: 642,
        id: 11,
        mealName: "Zapiekanka ziemniaczana z mięsem mielonym",
        type: "obiad"
      },
      {
        kcalValue: 492,
        id: 12,
        mealName: "Kurczak po chińsku z ryżem",
        type: "obiad"
      },
      {
        kcalValue: 521,
        id: 13,
        mealName: "Curry z ciecierzycą i ryżem",
        type: "obiad"
      },
      {
        kcalValue: 612,
        id: 14,
        mealName: "Kotlety po lwowsku z ziemniakami",
        type: "obiad"
      },
      {
        kcalValue: 716,
        id: 15,
        mealName: "Spaghetti z pieczonymi klopsami",
        type: "obiad"
      },
      {
        kcalValue: 241,
        id: 16,
        mealName: "Pasta z makreli, twarogu i pieczywo",
        type: "kolacja"
      },
      {
        kcalValue: 383,
        id: 17,
        mealName: "Sałatka meksykańska z ryżem",
        type: "kolacja"
      },
      {
        kcalValue: 700,
        id: 18,
        mealName: "Kurczak pieczony z ziemniakami",
        type: "obiad"
      },
      {
        kcalValue: 562,
        id: 19,
        mealName: "Zapiekanka makaronowa z kurczakiem i pieczarkami",
        type: "obiad"
      },
      {
        kcalValue: 319,
        id: 20,
        mealName: "Naleśniki z dżemem",
        type: "śniadanie"
      },
      {
        kcalValue: 450,
        id: 21,
        mealName: "Wafle ryżowe z masłem orzechwym",
        type: "śniadanie"
      },
      {
        kcalValue: 315,
        id: 22,
        mealName: "Owsianka z owocami",
        type: "śniadanie"
      },
      {
        kcalValue: 289,
        id: 23,
        mealName: "Pieczywo z awokado i bazylią",
        type: "kolacja"
      },
      {
        kcalValue: 315,
        id: 24,
        mealName: "Wrap z tuńczykiem i kukurydzą",
        type: "kolacja"
      }
    ],
    scheduledMeals: {
      BcoSh6UmE8O4vg1LIdadKUS2ub63: [
        {
          calories: "203",
          date: "2019-09-03T22:00:00.000Z",
          id: "",
          name: "Jajecznica",
          type: "śniadanie"
        },
        {
          calories: "203",
          date: "2019-09-03T22:00:00.000Z",
          id: "1",
          name: "Jajecznica",
          type: "śniadanie"
        },
        {
          calories: "203",
          date: "2019-09-03T22:00:00.000Z",
          id: "11",
          name: "Jajecznica",
          type: "śniadanie"
        },
        {
          calories: "203",
          date: "2019-09-03T22:00:00.000Z",
          id: "111",
          name: "Jajecznica",
          type: "śniadanie"
        },
        {
          calories: 390,
          date: "2019-09-03T22:00:00.000Z",
          id: 1,
          label: "Jajecznica i pieczywo",
          name: "Jajecznica i pieczywo",
          type: "śniadanie"
        },
        {
          calories: 390,
          date: "2019-09-03T22:00:00.000Z",
          id: 1,
          label: "Jajecznica i pieczywo",
          name: "Jajecznica i pieczywo",
          type: "śniadanie"
        },
        {
          calories: 390,
          date: "2019-09-03T22:00:00.000Z",
          id: 1,
          label: "Jajecznica i pieczywo",
          name: "Jajecznica i pieczywo",
          type: "śniadanie"
        }
      ]
    },
    users: {
      "57injnHic3eCcWkYBN0LGymB9ah2": {
        userEmail: "mario@o2.pl",
        userFirstName: "Marcin",
        userImgUrl: ""
      },
      "5K5ITqbFTxf0PEEc6gX5YqqMxtD2": {
        userEmail: "marc@o2.pl",
        userFirstName: "Marcin",
        userImgUrl: ""
      },
      "7rbh9NeMJmVpTGb1R32mSOWpFZu1": {
        userEmail: "jula@o2.pl",
        userFirstName: "kama",
        userImgUrl: ""
      },
      BcoSh6UmE8O4vg1LIdadKUS2ub63: {
        userEmail: "tes123123t@wp.pl",
        userFirstName: "Test",
        userImgUrl: ""
      },
      HkyxuYipHLP1eH4Z8ABDmav32W72: {
        userEmail: "jarowski.marcin@yahoo.co.uk",
        userFirstName: "Marcin",
        userImgUrl: ""
      },
      LBccf0mdiPVvbt9J2qjq9jDZNYU2: {
        userEmail: "eryka@o2.pl",
        userFirstName: "Eryka",
        userImgUrl: ""
      },
      jF0OhFslCeQ0jDQV0Hu4sRLMNnm1: {
        userEmail: "trolo@o2.pl",
        userFirstName: "Eryka",
        userImgUrl: ""
      },
      kF3SE7FfQ9SjX79imuigd8YVYsa2: {
        userEmail: "kamehame@o2.pl",
        userFirstName: "Kamehame",
        userImgUrl: ""
      },
      kZDZ6AIYQbMM18gJPgCAdlOlDZH3: {
        userEmail: "ok1p23kpo@o2.pl",
        userFirstName: "marcin",
        userImgUrl: ""
      },
      mYOQjF3ikQQsEWKisvaMIx1ijs53: {
        userEmail: "mar@o2.pl",
        userFirstName: "Marcin",
        userImgUrl: ""
      },
      okTsLDKXtveOcwzoc4aFdpxl1KF2: {
        userEmail: "wojtek@o2.pl",
        userFirstName: "Wojtek",
        userImgUrl: ""
      },
      sLLXHROYeLNHkfnAiZ2Q9lMHquF2: {
        userEmail: "marcin@o2.pl",
        userFirstName: "Marcin",
        userImgUrl: ""
      },
      vWjc7MFzB0PoxKGFhn0EfHqrpC53: {
        userEmail: "mari@o2.pl",
        userFirstName: "Marcin",
        userImgUrl: ""
      },
      zhjS5Uf4gXa5nNWXjOJJ7dCjFk22: {
        userEmail: "dsadsada@wp.pl",
        userFirstName: "Marcin",
        userImgUrl: ""
      }
    }
  };
  // console.log(breakfastsArray, dinnerArray, supperArray);
  const meals = [
    {
      mealName: "Jajecznica",
      ingredientsArray: ["4 jajka", "cebula", "pomidory", "olej"],
      percetageArray: [25, 40, 30],
      kcalValue: 351,
      mealId: uuid()
    },
    {
      mealName: "Płatki owsiane",
      ingredientsArray: ["Płatki 100g", "mleko", "miód"],
      percetageArray: [60, 20, 20],
      kcalValue: 462,
      mealId: uuid()
    },
    {
      mealName: "Płatki owsiane",
      ingredientsArray: ["Płatki 100g", "mleko", "miód"],
      percetageArray: [60, 20, 20],
      kcalValue: 462,
      mealId: uuid()
    }
  ];

  const [breakfastMeals, setBreakFastMeals] = useState(meals);
  /////////////////////////////////////////////////////////////
  // const addNewMeal = newMeal => {
  //   const updatedBreakfastMeals = [...breakfastMeals, newMeal];
  // };
  ////////////////////////////////////
  const [mealType, setMealType] = useState("");
  const mealTypesNames = ["Śniadanie", "Obiad", "Kolacja"];
  const [mealsArrayByMealTime, setMealsArrayByMealTime] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState();
  // const [selectedMealObject, setSelectedMealObject] = useState({});
  const [selectedFromSearch, setSelectedFromSearch] = useState(false);
  const handleMealsArrayType = () => {
    let mealsArrayForSearchByMealTime = basicMealsJSON.mealsArray.filter(
      meal => meal.type === mealType.toLowerCase()
    );
    setMealsArrayByMealTime(mealsArrayForSearchByMealTime);
  };
  const findSelectedInMealSearchFromAllMeals = id => {
    let selected = mealsArrayByMealTime.find(meal => {
      return meal.id === id;
    });
    setSelectedFromSearch(selected);
  };
  // const findSelectedMealFromScheduled = () => {
  //   //tutaj ustawiac jednego arraya w zaleznosci od typu posilkow i pobierac scheduled
  //   const mealObject = breakfastMeals.filter(meal => {
  //     if (meal.mealId === selectedMealId) {
  //       return meal;
  //     }
  //   });
  //   setSelectedMealObject(mealObject);
  // };
  // useEffect(() => {
  //   findSelectedMealFromScheduled();
  // }, [selectedMealId]);
  useEffect(() => {
    handleMealsArrayType();
  }, [mealType]);
  return (
    <MealsContext.Provider
      value={{
        breakfastMeals,
        selectedMealId,
        setSelectedMealId,
        mealType,
        setMealType,
        mealTypesNames,
        mealsArrayByMealTime,
        findSelectedInMealSearchFromAllMeals,
        selectedFromSearch
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContextProvider;
