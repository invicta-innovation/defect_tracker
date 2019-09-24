import {GET_PROJECT} from '../_constants/types'

const initialState={
    projects:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_PROJECT:
            return{
                ...state,
                projects:action.payload
            };
        default:
            return state
    }
}
