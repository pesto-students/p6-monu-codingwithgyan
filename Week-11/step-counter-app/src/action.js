import {ADD_STEP, RESET_STEP} from "./actionType";
export const addStep = () => {
    return {
        type : ADD_STEP,
    }
}

export const resetStep = () => {
    return {
        type : RESET_STEP,
    }
}