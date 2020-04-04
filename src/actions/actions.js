import {SET_NAVBAR_BACKGROUND_VISIBILITY} from "./actionTypes";

export const setBackgroundVisibility = backgroundIsVisible => (
    {
        type: SET_NAVBAR_BACKGROUND_VISIBILITY,
        payload: {
            backgroundIsVisible: backgroundIsVisible
        }
    }
);
