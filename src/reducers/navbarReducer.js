import {SET_BACKGROUND_OPACITY, SET_DRAWER_OPEN} from "../actions/actionTypes";

function navBarReducer(state = {backgroundOpacity: 0, drawerOpen: false}, action) {
    switch (action.type) {
        case SET_BACKGROUND_OPACITY:
            return Object.assign({}, state, (
                {
                    backgroundOpacity: action.payload.backgroundOpacity
                }
            ));

        case SET_DRAWER_OPEN:
            return Object.assign({}, state, {
                drawerOpen: action.payload.drawerOpen
            });

        default:
            return state;
    }
}

export default navBarReducer;
