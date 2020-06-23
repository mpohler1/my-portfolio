import {
    FETCH_PROJECTS_SUCCESS,
    SET_MODAL_VISIBLE,
    SET_PROJECT_HOVERED,
    SET_SELECTED_PROJECT
} from "../actions/actionTypes";

function projectsReducer(state = {projects: [], selectedProject: {}, modalVisible: false}, action) {
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

        case SET_SELECTED_PROJECT:
            return Object.assign({}, state, {
                selectedProject: action.payload.selectedProject
            });

        case SET_MODAL_VISIBLE:
            return Object.assign({}, state, {
                modalVisible: action.payload.modalVisible
            });

        default:
            return state;
    }
}

export default projectsReducer;
