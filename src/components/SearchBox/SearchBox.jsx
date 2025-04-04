import styles from './SearchBox.module.css'


const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div className={styles.searchContainer}>
            <label className={styles.label}>
                Find contacts by name:
                <input
                    className={styles.input}
                    type="text"
                    value={filter}
                    onChange={(event) => {
                        console.log("Filter input changed:", event.target.value);
                        onFilterChange(event.target.value);
                    }}
                />
            </label>
        </div>
    );
};

export default SearchBox;