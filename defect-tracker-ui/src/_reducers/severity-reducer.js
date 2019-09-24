import {GET_SEVERITY, NEW_SEVERITY, UPDATE_SEVERITY, SHOW_MODAL_SEVERITY} from "../_constants/types"

const initialState = {
  severities:[],
  modaldata:{},
  severity:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SEVERITY:
      return {
        ...state,
        severities:action.payload
      };
    
    case NEW_SEVERITY:
      return{
        ...state,
        severities:state.severities.concat(action.payload),
        modaldata:{show:false}
      };

    case UPDATE_SEVERITY:
      return{
        ...state,
        severities:state.severities.map(severity=>{
          if(severity.id==action.payload.id)
          {
            return action.payload;
          }
          else{
            return severity;
          }
        }),
        modaldata:{show:false}
      };

      case SHOW_MODAL_SEVERITY:
        return{
          ...state,
          modaldata:action.modaldata,
          severity:action.payload
        };
    default:
      return state;
  }
}