import { useReducer, useState } from "react";
import { fetchReducer } from "../reducers/fetch";
import { initialState, dataReducers } from "../reducers/datareducer";
import { DATA } from "../action/dataReducers";
import { useFetch } from "./useFetch";
export const useData = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [state, dispatch] = useReducer(dataReducers, initialState);

  //llamado a la API post
  const [endpoint, setEndpoint] = useState("data"); //postData
  const { stateFetch, postData } = useFetch(endpoint);
  const { data, loading, error } = state;

  const sendData = () => {
    console.log(`sendData`);

    dispatch({ type: DATA.SET_DATA, payload: { name, profession } });
    const dataPost = {
      name,
      profession,
    };

    postData(endpoint, dataPost);
    console.log(data);

    console.log(loading);
  };
  return {
    name,
    setName,
    profession,
    setProfession,
    sendData,
    data,
    loading,
    error,
  };
};
