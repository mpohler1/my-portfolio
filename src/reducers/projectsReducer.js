import {FETCH_PROJECTS_SUCCESS, SET_PROJECT_HOVERED} from "../actions/actionTypes";

function projectsReducer(state = {projects: []}, action) {
    switch (action.type) {
        case FETCH_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                projects: action.payload.projects.map(project => {
                    project.hovered = false;
                    return project;
                })
            });

        case SET_PROJECT_HOVERED:
            return Object.assign({}, state, {
                projects: state.projects.slice().map(project => {
                    if (project.id === action.payload.project.id) {
                        project.hovered = action.payload.hovered;
                    }
                    return project;
                })
            });

        default:
            return state;
    }
}

export default projectsReducer;
