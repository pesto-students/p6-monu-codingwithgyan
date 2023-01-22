import { SWITCH_ON,SWITCH_OFF,TOGGLE_SWITCH } from "./actionType"
const initialState = {
    isLightOn: true
  }
export const reducer = (currentState=initialState,{type}) => {
    switch(type)
    {
        case SWITCH_ON:
            return {...currentState,isLightOn:true}
        case SWITCH_OFF:
            return {...currentState,isLightOn:false}
        case TOGGLE_SWITCH:
            return {...currentState,isLightOn:!currentState?.isLightOn}
        default:
            return currentState;    
    }
}