import {GET_MODULE} from '../_constants/types'

const initialState={
    modules:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_MODULE:
            return{
                ...state,
                modules:action.payload
            };
        default:
            return state
    }
}
