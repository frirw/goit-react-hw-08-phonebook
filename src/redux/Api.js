import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://65bf702d25a83926ab94f962.mockapi.io/`;

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(`/contacts`, contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);
