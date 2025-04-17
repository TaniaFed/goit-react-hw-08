import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from '../filters/selectors'

export const selectLoading = (state) => state.contacts.loading;

export const selectFilter = (state) => state.contacts.filter;

export const selectAllContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);