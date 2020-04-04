import {SET_BACKGROUND_OPACITY} from "./actionTypes";

export const setBackgroundOpacity = backgroundOpacity => (
    {
        type: SET_BACKGROUND_OPACITY,
        payload: {
            backgroundOpacity: backgroundOpacity
        }
    }
);
