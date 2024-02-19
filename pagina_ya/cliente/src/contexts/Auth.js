import { createContext, useContext, useReducer } from "react";
import { LOGOUT, SET_AUTH } from "../action/auth";
import { authReducer, initialState } from "../reducers/auth";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const login = () => {
    console.log(`login`);
    const { jwt } = {
      jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFydHVyb0JhZHVuYSIsImlhdCI6MTUxNjIzOTAyMn0.LXyi3lgcAO13rKUm7xLYx6MkZKZnQibI91HsAhXbJMQ",
    };
    
    dispatch({ type: SET_AUTH, payload: { jwt } });
    localStorage.setItem("auth",jwt)
    console.log(state);
    return jwt;
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
