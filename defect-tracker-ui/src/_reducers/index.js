import { combineReducers } from "redux";
import defectStatusReducer from "./defect-status-reducer";
export default combineReducers({
    defectStatusStore: defectStatusReducer,
  });