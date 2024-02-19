import { useCallback, useEffect, useReducer, useState } from "react";
import { fetchReducer, initialState } from "../reducers/fetch";
import { FETCH_DATA } from "../action/fecht";
import { API } from "../API";

export const useFetch = (endpoint) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async (endpoint) => {
    try {
      let { data } = await API.get(endpoint);
      console.log(data);
      dispatch({ type: FETCH_DATA.SET_DATA, payload: data });
      setLoading(false);
    } catch (error) {
      dispatch({ type: FETCH_DATA.SET_ERROR });
    }
  };
  const postData = async (endpoint, dataPost) => {
    try {
      setLoading(true);
      let { data } = await API.post(endpoint, dataPost); //SET_POST_DATA
      console.log(data);
      dispatch({ type: FETCH_DATA.SET_DATA, payload: data });
      setLoading(false);
      return loading;
    } catch (error) {
      dispatch({ type: FETCH_DATA.SET_ERROR });
    }
  };

  return { state, fetchData, postData };
};
