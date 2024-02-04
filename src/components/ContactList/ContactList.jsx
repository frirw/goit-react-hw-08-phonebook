import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectFilter, selectContacts } from '../../redux/contacts/selectors';
import { createSelector } from '@reduxjs/toolkit';
import css from './ContactList.module.css';

const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    )
);

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <div className={css.contact}>
            <div>
              <p className={css.name}>{name}: </p>
            </div>
            <div>
              <p className={css.number}>{number}</p>
            </div>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={css.button}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
