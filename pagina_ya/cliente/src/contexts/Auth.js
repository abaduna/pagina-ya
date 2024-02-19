import { createContext, useContext, useReducer } from "react";
import { LOGOUT, SET_AUTH } from "../action/auth";
import { authReducer, initialState } from "../reducers/auth";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const login = (jwt) => {
    console.log(`login`);
   console.log(jwt);
    
    dispatch({ type: SET_AUTH, payload: {  jwt: jwt } });
    localStorage.setItem("auth",jwt)
    console.log(state)
  };
  const setAuth = ({ jwt }) => {
    dispatch({ type: SET_AUTH, payload: { jwt } });
    console.log(state);
  };
  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("auth")
  };
  const getUserInformation = () => {
    console.log(state.jwt);
    return state.jwt
  }; //

  return (
    <Provider value={{ setAuth, logout, login, getUserInformation }}>
      {children}
    </Provider>
  );
};
