
//import {fetchingInProgress, fetchingSuccess, fetchingError} from "./contactSlice"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL ="https://654d327777200d6ba85a2088.mockapi.io"
// }

// const  fetchContacts =  ()=>async dispatch => {
//     axios.defaults.baseURL ="https://654d327777200d6ba85a2088.mockapi.io"
  
//     try {
//         // Індикатор завантаження
//         dispatch(fetchingInProgress());
//         // HTTP-запит
//         const response = await axios.get("/contacts");
//         // Обробка даних
//         dispatch(fetchingSuccess(response.data));
//       } catch (e) {
//         // Обробка помилки
//         dispatch(fetchingError(e.message));
//       }
    
//  }

 const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
     const response = await axios.get("/contacts");
  
    return response.data;
  });

  const addContact = createAsyncThunk("contacts/addContact", async (contact) => {

    const response = await axios.post("/contacts",contact);
   return response.data;
 });

const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
      const response = await axios.delete(`/contacts/${id}`);
   return response.data;
 });
export {fetchContacts, addContact,deleteContact};