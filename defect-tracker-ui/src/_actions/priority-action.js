import {GET_PERIORITY} from '../_constants/types';

export const fetchPriority = () =>dispatch=>{
    dispatch({
        type:GET_PERIORITY,
        payload:[
            {id:1, priorityType: "Hightest"},
            {id:2, priorityType: "High"},
            {id:3, priorityType: "Medium"},
            {id:4, priorityType: "Low"},
        ]
    })
}

