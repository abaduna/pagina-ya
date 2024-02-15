import { FETCH_DATA } from "../action/fecht";


export const initialState = {
    loading:true,
    error:false,
    data:{}
}

export const fetchReducer =(state,action)=>{
    switch (action.type) {
        case FETCH_DATA.SET_DATA:

            return{
                loading:false,
                error:false,
                data:action.payload
            }
            break;
        case FETCH_DATA.SET_ERROR:
            return{
                ...initialState,
                loading:false,
                error:true
            }
            break;
        default:
            return state
            break;
    }
}