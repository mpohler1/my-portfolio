import {SEND_MAIL_FAILURE, SEND_MAIL_SUCCESS} from "../actions/actionTypes";

function mailReducer(state = {response: {}}, action) {
    switch (action.type) {
        case SEND_MAIL_SUCCESS:
        case SEND_MAIL_FAILURE:
            return Object.assign({}, state, {
                response: action.payload.response
            });

        default:
            return state;
    }
}

export default mailReducer;
