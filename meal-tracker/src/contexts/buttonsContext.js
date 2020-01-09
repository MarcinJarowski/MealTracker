import React, { useState, createContext } from "react";

export const ButtonsContext = createContext();

const ButtonsContextProvider = props => {
  const [mealType, setMealType] = useState("");

  const mealTypesNames = ["Śniadanie", "Obiad", "Kolacja"];

  return (
    <ButtonsContext.Provider value={{ mealType, setMealType, mealTypesNames }}>
      {props.children}
    </ButtonsContext.Provider>
  );
};

export default ButtonsContextProvider;
