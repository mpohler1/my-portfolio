import {SET_BODY, SET_CONTACT_ME_MODAL_VISIBLE, SET_ERRORS, SET_EMAIL, SET_NAME} from "../actions/actionTypes";

function contactMeReducer(state={
    modalVisible: false,
    name: "",
    email: "",
    body: "",
    errors: {}
}, action) {
    switch (action.type) {
        case SET_CONTACT_ME_MODAL_VISIBLE:
            return Object.assign({}, state, {
                modalVisible: action.payload.modalVisible
            });

        case SET_NAME:
            return Object.assign({}, state, {
                name: action.payload.name
            });

        case SET_EMAIL:
            return Object.assign({}, state, {
                email: action.payload.email
            });

        case SET_BODY:
            return Object.assign({}, state, {
                body: action.payload.body
            });

        case SET_ERRORS:
            return Object.assign({}, state, {
                errors: action.payload.errors
            });

        default:
            return state;
    }
}

export default contactMeReducer;
