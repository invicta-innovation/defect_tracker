import {GET_SEVERITY, SHOW_MODAL_SEVERITY} from '../_constants/types';

export const fetchSeverity = () =>dispatch=>{
    dispatch({
        type:GET_SEVERITY,
        payload:[
            {id:1, severityType: "Hightest"},
            {id:2, severityType: "High"},
            {id:3, severityType: "Medium"},
            {id:4, severityType: "Low"},
        ]
    })
}

export const showModal =(modaldata,severityObj)=>dispatch=>{
    if(modaldata.action=='ADD'){
        dispatch({
            type:SHOW_MODAL_SEVERITY,
            modaldata:modaldata,
            payload:{}
        })
    }

    else if(modaldata.action=='EDIT'){
        dispatch({
            type: SHOW_MODAL_SEVERITY,
            modaldata:modaldata,
            payload:severityObj
        })
    }
}