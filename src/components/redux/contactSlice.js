import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts,addContact,deleteContact } from './api';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {
  contactsUser: [],
  isLoading: false,
  error: null,
};
export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    //   addContact(state, action) {
    //   state.contactsUser = [...state.contactsUser, action.payload];
    // },

    // deleteContact: (state, action) => {
    //   state.contactsUser = state.contactsUser.filter(
    //     el => el.id !== action.payload
    //   );
    //},
  },
  extraReducers:  {
    [fetchContacts.pending](state, ){
      state.isLoading = true;
    },
     [fetchContacts.fulfilled](state, action){
        state.isLoading = false;
        state.error = null;
        state.contactsUser = action.payload;
      },
      [fetchContacts.rejected](state, action){
        state.isLoading = false;
        state.error = action.payload;
      },
      [addContact.pending](state, ){
        state.isLoading = true;
      },
        [addContact.fulfilled](state, action){
          state.isLoading = false;
          state.error = null;
          state.contactsUser = [...state.contactsUser, action.payload];
        },
       [addContact.rejected](state, action){
          state.isLoading = false;
          state.error = action.payload;
        },


[deleteContact.pending](state, ){
        state.isLoading = true;
      },
        [deleteContact.fulfilled](state, action){
          state.isLoading = false;
          state.error = null;
          const index = state.contactsUser.findIndex(

            contact => contact.id === action.payload.id
          );
          state.contactsUser.splice(index, 1);
         // state.contactsUser = [...state.contactsUser, action.payload];
        },
       [deleteContact.rejected](state, action){
          state.isLoading = false;
          state.error = action.payload;
        }

        
  },

  // extraReducers: builder => {
  //   builder.addCase(fetchContacts.pending, (state, ) => {
  //     state.isLoading = true;
  //   }),
  //     builder.addCase(fetchContacts.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.contactsUser = action.payload;
  //     }),
  //     builder.addCase(fetchContacts.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  //     builder.addCase(addContacts.pending, (state, ) => {
  //       state.isLoading = true;
  //     }),
  //       builder.addCase(addContacts.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //         state.error = null;
  //         state.contactsUser = action.payload;
  //       }),
  //       builder.addCase(addContacts.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  // },
});

// Action creators are generated for each case reducer function

//export const { addContact, deleteContact, fetchingInProgress, fetchingSuccess, fetchingError } = contactSlice.actions;
//export const {  deleteContact } = contactSlice.actions;
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
//
export const getConactFromState = state => {
 
  return state.contactsUser;
  //return state.contactsUser.contactsUser
};
