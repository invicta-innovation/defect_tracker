import {GET_SEVERITY} from '../_constants/types';

export const fetchSeverity = () =>dispatch=>{
    dispatch({
        type:GET_SEVERITY,
        payload:[
            {id:1, severityName: "Hightest"},
            {id:2, severityName: "High"},
            {id:3, severityName: "Medium"},
            {id:4, severityName: "Low"},
        ]
    })
}