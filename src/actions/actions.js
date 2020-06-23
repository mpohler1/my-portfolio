import {
    FETCH_PROJECTS_FAILURE,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS, SEND_MAIL_FAILURE, SEND_MAIL_REQUEST, SEND_MAIL_SUCCESS,
    SET_BACKGROUND_OPACITY, SET_PROJECT_HOVERED
} from "./actionTypes";

export const setBackgroundOpacity = backgroundOpacity => (
    {
        type: SET_BACKGROUND_OPACITY,
        payload: {
            backgroundOpacity: backgroundOpacity
        }
    }
);

export const fetchProjectsRequest = () => (
    {
        type: FETCH_PROJECTS_REQUEST
    }
);

export const fetchProjectsSuccess = projects => (
    {
        type: FETCH_PROJECTS_SUCCESS,
        payload: {
            projects: projects
        }
    }
);

export const fetchProjectsFailure = () => (
    {
        type: FETCH_PROJECTS_FAILURE
    }
);

export const sendMailRequest = () => (
    {
        type: SEND_MAIL_REQUEST
    }
);

export const sendMailSuccess = responseMessage => (
    {
        type: SEND_MAIL_SUCCESS,
        payload: {
            responseMessage: responseMessage
        }
    }
);

export const sendMailFailure = responseMessage => (
    {
        type: SEND_MAIL_FAILURE,
        payload: {
            responseMessage: responseMessage
        }
    }
);

export const setProjectHovered = (project, hovered) => (
    {
        type: SET_PROJECT_HOVERED,
        payload: {
            project: project,
            hovered: hovered
        }
    }
);

