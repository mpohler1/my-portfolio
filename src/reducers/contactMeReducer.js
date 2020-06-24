import {SET_BODY, SET_CONTACT_ME_MODAL_VISIBLE, SET_ERRORS, SET_FROM, SET_SUBJECT} from "../actions/actionTypes";

function contactMeReducer(state={
    modalVisible: false,
    from: "",
    subject: "",
    body: "",
    errors: {}
}, action) {
    switch (action.type) {
        case SET_CONTACT_ME_MODAL_VISIBLE:
            return Object.assign({}, state, {
                modalVisible: action.payload.modalVisible
            });

        case SET_FROM:
            return Object.assign({}, state, {
                from: action.payload.from
            });

        case SET_SUBJECT:
            return Object.assign({}, state, {
                subject: action.payload.subject
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
