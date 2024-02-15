import { DATA } from "../action/dataReducers";

export const initialState = {
  name: "",
  profession: "",
};

export const dataReducers  = (state, action) => {
  switch (action.type) {
    case DATA.SET_DATA:
        console.log(`reducers`);
      console.log(`action.payload.name ${action.payload.name}`);
      console.log(`action.payload.profession ${action.payload.profession}`);
      
      return {
        ...state,
        name: action.payload.name,
        profession: action.payload.profession,
      };

    default:
      break;
  }
};
