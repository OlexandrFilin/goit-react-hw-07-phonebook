import { createSlice } from '@reduxjs/toolkit';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
  contactsUser: [
   
  ],
  isLoading: false,
  error: null,
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      //state.contactsUser = [...state.contactsUser, action.payload];
      state.contactsUser = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },




    addContact(state, action) {
      state.contactsUser = [...state.contactsUser, action.payload];
    },

    deleteContact: (state, action) => {
      state.contactsUser = state.contactsUser.filter(
        el => el.id !== action.payload
      );
    },
  },


});

// Action creators are generated for each case reducer function

export const { addContact, deleteContact, fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;

//export default addCotactSlice.reducer

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );

//selectors
export const getConactFromState = state => state.contactsUser.contactsUser;
