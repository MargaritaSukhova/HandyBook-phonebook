import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectSortedContacts = createSelector(
  [selectContacts],
  contacts => {
    const contactsCopy = [...contacts];
    const contactsInAlphabeticalOrder = contactsCopy.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return contactsInAlphabeticalOrder;
  }
);

export const selectFilteredContacts = createSelector(
  [selectSortedContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  }
);
