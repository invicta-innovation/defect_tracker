import {GET_DEFECT_STATUS} from "../_constants/types"

const initialState = {
  defectStatuses:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DEFECT_STATUS:
      return {
        ...state,
        defectStatuses:action.payload
      };
    default:
      return state;
  }
}
