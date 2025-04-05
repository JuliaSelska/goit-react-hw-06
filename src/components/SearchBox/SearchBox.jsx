import { useState } from 'react';
import styles from './SearchBox.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';


const SearchBox = ({ filter, onFilterChange }) => {
    return (
        <div className={styles.searchContainer}>
            <label className={styles.label}>
                Find contacts by name:
                <input
                    className={styles.input}
                    type="text"
                    value={filter}
                    onChange={(e) => onFilterChange(e.target.value)}
                />
            </label>
        </div>
    );
};

export default SearchBox;