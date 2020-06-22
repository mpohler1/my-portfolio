import {combineReducers} from "redux";
import navbarReducer from "./navbarReducer";
import projectsReducer from "./projectsReducer";
import mailReducer from "./mailReducer";

export default combineReducers({
    navbar: navbarReducer,
    projects: projectsReducer,
    mail: mailReducer
});
