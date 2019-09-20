import {GET_SEVERITY} from "../_constants/types"

const initialState = {
  severity:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEVERITY:
      return {
        ...state,
        severity:action.payload
      };
    default:
      return state;
  }
}