import {RESET_MAIL_MODE, SEND_MAIL_FAILURE, SEND_MAIL_REQUEST, SEND_MAIL_SUCCESS} from "../actions/actionTypes";
import {FAILURE, NONE, SENDING, SUCCESS} from "../resources/mailModes";

function mailReducer(state = {response: "", mode: NONE}, action) {
    switch (action.type) {
        case SEND_MAIL_REQUEST:
            return Object.assign({}, state, {
                mode: SENDING
            });

        case SEND_MAIL_SUCCESS:
            return Object.assign({}, state, {
                mode: SUCCESS,
                response: action.payload.response
            });

        case SEND_MAIL_FAILURE:
            return Object.assign({}, state, {
                mode: FAILURE,
                response: action.payload.response
            });

        case RESET_MAIL_MODE:
            return Object.assign({}, state, {
                mode: NONE
            });

        default:
            return state;
    }
}

export default mailReducer;
