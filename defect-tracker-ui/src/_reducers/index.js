import { combineReducers } from "redux";
import defectStatusReducer from "./defect-status-reducer";
import priorityReducer from "./priority-reducer";
import defectTypeReducer from "./defect-types-reducer";
import severityReducer from "./severity-reducer";
import releasesReducer from "./releases-reducer";


export default combineReducers({
    defectStatusStore: defectStatusReducer,
    defectTypeStore: defectTypeReducer,
    priorityStore:priorityReducer,
    severityStore:severityReducer,
    releasesStore : releasesReducer
  });