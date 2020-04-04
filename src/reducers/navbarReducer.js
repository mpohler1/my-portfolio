import {SET_BACKGROUND_OPACITY} from "../actions/actionTypes";

function navBarReducer(state = {backgroundOpacity: 0}, action) {
    switch (action.type) {
        case SET_BACKGROUND_OPACITY:
            return Object.assign({}, state, (
                {
                    backgroundOpacity: action.payload.backgroundOpacity
                }
            ));
        default:
            return state;
    }
}

export default navBarReducer;
