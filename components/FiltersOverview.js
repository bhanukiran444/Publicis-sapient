import FilterButton from "./FilterButton";
import styles from "../styles/FiltersOverview.module.css";
import { useRouter } from "next/router";
import { useReducer } from "react";

const initialState = {
  filterData: [
    { launch_year: 2006, label: 2006, isSelected: false },
    { launch_year: 2007, label: 2007, isSelected: false },
    { launch_year: 2008, label: 2008, isSelected: false },
    { launch_year: 2009, label: 2009, isSelected: false },
    { launch_year: 2010, label: 2010, isSelected: false },
    { launch_year: 2011, label: 2011, isSelected: false },
    { launch_year: 2012, label: 2012, isSelected: false },
    { launch_year: 2013, label: 2013, isSelected: false },
    { launch_year: 2014, label: 2014, isSelected: false },
    { launch_year: 2015, label: 2015, isSelected: false },
    { launch_year: 2016, label: 2016, isSelected: false },
    { launch_year: 2017, label: 2017, isSelected: false },
    { launch_year: 2018, label: 2018, isSelected: false },
    { launch_year: 2019, label: 2019, isSelected: false },
    { launch_year: 2020, label: 2020, isSelected: false },
  ],
  successfulLaunchData: [
    { launch_success: true, label: "True", isSelected: false },
    { launch_success: false, label: "False", isSelected: false },
  ],
  successfulLandingData: [
    { land_success: true, label: "True", isSelected: false },
    { land_success: false, label: "False", isSelected: false },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return initialState;
    case "YEAR_FILTER_SELECT_SWITCH":
      return {
        ...state,
        filterData: state.filterData.map((data) => {
          if (data.launch_year === action.data.launch_year) {
            data.isSelected = !data.isSelected;
          } else {
            data.isSelected = false;
          }
          return data;
        }),
      };
    case "LAUNCH_SUCCESS_FILTER_SELECT_SWITCH":
      return {
        ...state,
        successfulLaunchData: state.successfulLaunchData.map((data) => {
          if (data.launch_success === action.data.launch_success) {
            data.isSelected = !data.isSelected;
          } else {
            data.isSelected = false;
          }
          return data;
        }),
      };
    case "LAND_SUCCESS_SELECT_SWITCH":
      return {
        ...state,
        successfulLandingData: state.successfulLandingData.map((data) => {
          if (data.land_success === action.data.land_success) {
            data.isSelected = !data.isSelected;
          } else {
            data.isSelected = false;
          }
          return data;
        }),
      };
  }
};

const FiltersOverview = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();
  const handleFilterClick = (data) => {
    console.log(state);
    console.log(data);
    let queryString = "";
    if (typeof data.launch_success !== "undefined") {
      dispatch({ type: "LAUNCH_SUCCESS_FILTER_SELECT_SWITCH", data });
      queryString = `launch_success=${data.launch_success}`;
      if (data.isSelected === false) {
        queryString = "/";
        dispatch({ type: "RESET" });
      }
    }
    if (typeof data.land_success !== "undefined") {
      dispatch({ type: "LAND_SUCCESS_SELECT_SWITCH", data });
      queryString = `launch_success=true&land_success=${data.land_success}`;
      if (data.isSelected === false) {
        queryString = "/";
        dispatch({ type: "RESET" });
      }
    }

    if (typeof data.launch_year !== "undefined") {
      dispatch({ type: "YEAR_FILTER_SELECT_SWITCH", data });
      queryString = `launch_success=true&land_success=true&launch_year=${data.launch_year}`;
      if (data.isSelected === false) {
        queryString = "/";
        dispatch({ type: "RESET" });
      }
    }

    router.push(queryString);
  };
  return (
    <div className={styles.container}>
      <p className={styles.header}>Filters</p>
      <p className={styles.subHeader}>Launch Year</p>
      <div className={styles.buttonWrapper}>
        {state.filterData.map((filter) => {
          return (
            <FilterButton
              key={filter.launch_year}
              filter={filter}
              handleClick={handleFilterClick}
            />
          );
        })}
      </div>
      <p className={styles.subHeader}>Successful Launch</p>
      <div className={styles.buttonWrapper}>
        {state.successfulLaunchData.map((filter) => {
          return (
            <FilterButton
              key={filter.launch_success}
              filter={filter}
              handleClick={handleFilterClick}
            />
          );
        })}
      </div>
      <p className={styles.subHeader}>Successful Landing</p>
      <div className={styles.buttonWrapper}>
        {state.successfulLandingData.map((filter) => {
          return (
            <FilterButton
              key={filter.land_success}
              filter={filter}
              handleClick={handleFilterClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FiltersOverview;
