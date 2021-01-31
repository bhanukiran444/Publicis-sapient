import styles from "../styles/FiltersOverview.module.css";

const FilterButton = ({ filter, handleClick }) => {
  return (
    <button
      className={filter.isSelected ? styles.buttonSelected : styles.button}
      onClick={() => handleClick(filter)}
    >
      {filter.label}
    </button>
  );
};

export default FilterButton;
