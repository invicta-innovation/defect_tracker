import {GET_RELEASES} from "../_constants/types"

const initialState = {
  releases:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RELEASES:
      return {
        ...state,
        releases:action.payload
      };
    default:
      return state;
  }
}