import { DATA } from "../action/dataReducers";

export const initialState = {
  name: "",
  profession: "",
  loadin:false,
  error:false,
  
};

export const dataReducers = (state, action) => {
  switch (action.type) {
    case DATA.SET_DATA:
      return {
        ...state,
        name: action.payload.name,
        profession: action.payload.profession,
      };

    default:
      break;
  }
};
