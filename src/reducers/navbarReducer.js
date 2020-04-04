import {SET_NAVBAR_BACKGROUND_VISIBILITY} from "../actions/actionTypes";

function navBarReducer(state = {backgroundIsVisible: false}, action) {
    switch (action.type) {
        case SET_NAVBAR_BACKGROUND_VISIBILITY:
            return Object.assign({}, state, (
                {
                    backgroundIsVisible: action.payload.backgroundIsVisible
                }
            ));
        default:
            return state;
    }
}

export default navBarReducer;
