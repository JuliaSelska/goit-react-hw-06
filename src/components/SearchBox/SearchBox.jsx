import { useState } from 'react';
import styles from './SearchBox.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/store';


const SearchBox = ({ filter, onFilterChange }) => {

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(changeFilter(event.target.elements.text.value))
        event.target.reset();

    }

    // const filter = useSelector((state) => state.filters.name)


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