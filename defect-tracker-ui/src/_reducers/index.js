import { combineReducers } from "redux";
import defectStatusReducer from "./defect-status-reducer";
import priorityReducer from "./priority-reducer";
import defectTypeReducer from "./defect-types-reducer";
import severityReducer from "./severity-reducer";
import releasesReducer from "./releases-reducer";
import projectReducer from "./project-reducer";
import moduleReducer from "./module-reducer"
import submoduleReducer from "./sub-module-reducer"

export default combineReducers({
    defectStatusStore: defectStatusReducer,
    defectTypeStore: defectTypeReducer,
    priorityStore:priorityReducer,
    severityStore:severityReducer,
    releasesStore : releasesReducer,
    projectsStore:projectReducer,
    modulesStore:moduleReducer,
    submodulesStore:submoduleReducer,
  });