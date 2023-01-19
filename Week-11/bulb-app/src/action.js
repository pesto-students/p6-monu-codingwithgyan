import { SWITCH_ON,SWITCH_OFF, TOGGLE_SWITCH } from "./actionType"
export const switchOnBulb = () => {
    return {
        type:SWITCH_ON,
    }
};

export const switchOffBulb = () => {
    return {
        type:SWITCH_OFF,
    }
};

export const toggleSwitch = () => {
    return {
        type:TOGGLE_SWITCH,
    }
};