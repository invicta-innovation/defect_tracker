import {GET_DEFECT_TYPES} from "../_constants/types"

const initialState = {
  defectTypes:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DEFECT_TYPES:
      return {
        ...state,
        defectTypes:action.payload
      };
    default:
      return state;
  }
}