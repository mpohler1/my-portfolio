import {FETCH_PROJECTS_SUCCESS} from "../actions/actionTypes";

function projectsReducer(state = {projects: []}, action) {
    switch (action.type) {
        case FETCH_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                projects: action.payload.projects
            });

        default:
            return state;
    }
}

export default projectsReducer;
