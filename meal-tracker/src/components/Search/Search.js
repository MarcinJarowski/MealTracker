import React, { useContext, useEffect, useRef, useState } from "react";
import { MealsContext } from "../../contexts/mealsContext";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import uuid from "uuid";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Search() {
  const {
    breakfastMeals,
    selectedMealId,
    setSelectedMealId,
    mealType
  } = useContext(MealsContext);
  const dataForSelect = breakfastMeals.map(meal => {
    const { mealId, mealName } = meal;
    return { mealId, mealName };
  });
  const classes = useStyles();

  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    // console.log(selectedMealId);
  }, [selectedMealId]);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = mealId => event => {
    setSelectedMealId(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          {mealType}
        </InputLabel>
        <Select
          native
          value={selectedMealId}
          onChange={handleChange()}
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple"
          }}
        >
          {dataForSelect.map(meal => {
            const { mealId, mealName } = meal;
            return (
              <option key={uuid()} value={mealId}>
                {mealName}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
