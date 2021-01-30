import styles from '../styles/FiltersOverview.module.css'

const FilterButton = ({filter}) => {
    return (
        <button className={styles.button}>
            {filter.label}
        </button>
    )
}

export default FilterButton
