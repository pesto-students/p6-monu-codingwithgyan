import {ADD_STEP, RESET_STEP} from "./actionType";
const initial = {
    stepCount : 0,
}
export const reducer = (state=initial,{type}) => {
    switch(type)
    {
        case ADD_STEP : 
            return {...state,stepCount:state.stepCount+1}
        case RESET_STEP : 
            return {...state,stepCount:0}
        default :
            return state;    
    }
}