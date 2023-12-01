/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer";
import axios from 'axios'


const CharStates = createContext();

const initialState = {
  list: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  theme: "dark",
  formValues: {
    name: "",
    email: "",
  },
  showContactHeaders: true,
}


const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {list, favs, theme, formValues, showContactHeaders } = state;
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_CHARACTERS", payload: res.data })
  }); 
  }, [])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs]);

  return (
    <CharStates.Provider value={{ list, favs, theme, formValues, showContactHeaders, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};

export default Context;

export const useCharStates = () => useContext(CharStates);
