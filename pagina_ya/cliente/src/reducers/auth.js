import {SET_AUTH,LOGOUT} from "../action/auth"
export const initialState = {
  isLoggedIn: false,
  jwt:null
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:{
       return {
        isLoggedIn:true,
        jwt:payload
        }; 
    }
    case LOGOUT:{
        return {
         ...state
         }; 
     }
         

    default:
      return state;
  }
};
