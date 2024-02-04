import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <label className={css.filterLabel}>
      <p className={css.labelText}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={css.filterInput}
      />
    </label>
  );
};

export default Filter;
