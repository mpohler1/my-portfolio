import {
    FETCH_PROJECTS_FAILURE,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    SEND_MAIL_FAILURE,
    SEND_MAIL_REQUEST,
    SEND_MAIL_SUCCESS,
    SET_BACKGROUND_OPACITY,
    SET_FILTER_MODE,
    SET_PROJECTS_MODAL_VISIBLE,
    SET_PROJECT_HOVERED,
    SET_SELECTED_PROJECT,
    SET_CONTACT_ME_MODAL_VISIBLE, SET_FROM, SET_SUBJECT, SET_BODY
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

export const setSelectedProject = selectedProject => (
    {
        type: SET_SELECTED_PROJECT,
        payload: {
            selectedProject: selectedProject
        }
    }
);

export const setProjectsModalVisible = modalVisible => (
    {
        type: SET_PROJECTS_MODAL_VISIBLE,
        payload: {
            modalVisible: modalVisible
        }
    }
);

export const setFilterMode = filterMode => (
    {
        type: SET_FILTER_MODE,
        payload: {
            filterMode: filterMode
        }
    }
);

export const setContactMeModalVisible = modalVisible => (
    {
        type: SET_CONTACT_ME_MODAL_VISIBLE,
        payload: {
            modalVisible: modalVisible
        }
    }
);

export const setFrom = from => (
    {
        type: SET_FROM,
        payload: {
            from: from
        }
    }
);

export const setSubject = subject => (
    {
        type: SET_SUBJECT,
        payload: {
            subject: subject
        }
    }
);

export const setBody = body => (
    {
        type: SET_BODY,
        payload: {
            body: body
        }
    }
);
