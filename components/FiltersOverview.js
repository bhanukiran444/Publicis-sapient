import FilterButton from "./FilterButton";
import styles from "../styles/FiltersOverview.module.css";
const filterData = [
  { launch_year: 2006, label: 2006 },
  { launch_year: 2007, label: 2007 },
  { launch_year: 2008, label: 2008 },
  { launch_year: 2009, label: 2009 },
  { launch_year: 2010, label: 2010 },
  { launch_year: 2011, label: 2011 },
  { launch_year: 2012, label: 2012 },
  { launch_year: 2013, label: 2013 },
  { launch_year: 2014, label: 2014 },
  { launch_year: 2015, label: 2015 },
  { launch_year: 2016, label: 2016 },
  { launch_year: 2017, label: 2017 },
  { launch_year: 2018, label: 2018 },
  { launch_year: 2019, label: 2019 },
  { launch_year: 2020, label: 2020 },
];

const successfulLaunchData = [
    { launch_success: true, label: "True" },
    { launch_success: false, label: "False" },
];

const successfulLandingData = [
    { land_success: true, label: "True" },
    { land_success: false, label: "False" },
];

const FiltersOverview = () => {
  return (
    <div className={styles.container}>
      <p className={styles.header}>Filters</p>
      <p className={styles.subHeader}>Launch Year</p>
      <div className={styles.buttonWrapper}>
        {filterData.map((filter) => {
          return <FilterButton key={filter.launch_year} filter={filter} />;
        })}
      </div>
      <p className={styles.subHeader}>Successful Launch</p>
      <div className={styles.buttonWrapper}>
        {successfulLaunchData.map((filter) => {
          return <FilterButton key={filter.launch_success} filter={filter} />;
        })}
      </div>
      <p className={styles.subHeader}>Successful Launch</p>
      <div className={styles.buttonWrapper}>
        {successfulLandingData.map((filter) => {
          return <FilterButton key={filter.land_success} filter={filter} />;
        })}
      </div>
    </div>
  );
};

export default FiltersOverview;
