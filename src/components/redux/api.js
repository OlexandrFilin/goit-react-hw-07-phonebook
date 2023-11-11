
import {fetchingInProgress, fetchingSuccess, fetchingError} from "./contactSlice"

import axios from "axios";

// }

const  fetchContacts =  ()=>async dispatch => {
    axios.defaults.baseURL ="https://654d327777200d6ba85a2088.mockapi.io"
  
    try {
        // Індикатор завантаження
        dispatch(fetchingInProgress());
        // HTTP-запит
        const response = await axios.get("/contacts");
        // Обробка даних
        dispatch(fetchingSuccess(response.data));
      } catch (e) {
        // Обробка помилки
        dispatch(fetchingError(e.message));
      }
    
 }

export {fetchContacts};