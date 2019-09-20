import {GET_PERIORITY} from "../_constants/types"

const initialState = {
  priority:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PERIORITY:
      return {
        ...state,
        priority:action.payload
      };
    default:
      return state;
  }
}