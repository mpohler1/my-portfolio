import {SET_CONTACT_ME_MODAL_VISIBLE} from "../actions/actionTypes";

function contactMeReducer(state={
    modalVisible: false,
    from: "",
    subject: "",
    body: ""
}, action) {
    switch (action.type) {
        case SET_CONTACT_ME_MODAL_VISIBLE:
            return Object.assign({}, state, {
                modalVisible: action.payload.modalVisible
            });

        default:
            return state;
    }
}

export default contactMeReducer;
