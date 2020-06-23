import {
    FETCH_PROJECTS_SUCCESS, SET_FILTER_MODE,
    SET_MODAL_VISIBLE,
    SET_PROJECT_HOVERED,
    SET_SELECTED_PROJECT
} from "../actions/actionTypes";
import {ALL_PROJECTS} from "../resources/filterModes";

function projectsReducer(state = {
    projects: [],
    selectedProject: {},
    modalVisible: false,
    filterMode: ALL_PROJECTS
}, action) {
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

        case SET_FILTER_MODE:
            return Object.assign({}, state, {
                filterMode: action.payload.filterMode
            });

        default:
            return state;
    }
}

export default projectsReducer;
