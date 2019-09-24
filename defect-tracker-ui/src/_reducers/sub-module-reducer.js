import {GET_SUBMODULE} from '../_constants/types'

const initialState={
    submodules:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_SUBMODULE:
            return{
                ...state,
                submodules:action.payload
            };
        default:
            return state
    }
}
