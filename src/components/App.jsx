import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/Api';
import { selectContacts } from '../redux/selectors';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.contactsContainer}>
        <ContactForm className={css.contactsForm} />
        <h2 className={css.contactsHeader}>Contacts</h2>
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </div>
    </div>
  );
};

export default App;
