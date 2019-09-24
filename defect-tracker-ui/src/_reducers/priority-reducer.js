import {GET_PERIORITY, NEW_PERIORITY, SHOW_MODAL_PERIORITY,UPDATE_PERIORITY} from "../_constants/types"

const initialState = {
  priorities:[],
  modaldata:{},
  priority:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PERIORITY:
      return {
        ...state,
        priorities:action.payload
      };
    case NEW_PERIORITY:
      return {
        ...state,
        priorities:state.priorities.concat(action.payload),
        modaldata:{show:false}
      };
      case UPDATE_PERIORITY:
      return {
        ...state,
        priorities:state.priorities.map(priority=>{
          if(priority.id==action.payload.id) 
          {
          return action.payload;
          }else{
            return priority;
          }}),
        modaldata:{show:false}
      };
      case SHOW_MODAL_PERIORITY:
          return {
            ...state,
            modaldata:action.modaldata,
            priority:action.payload
          };
    default:
      return state;
        }
      }