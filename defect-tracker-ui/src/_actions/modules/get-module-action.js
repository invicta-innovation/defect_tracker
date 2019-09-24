import {GET_MODULE} from '../../_constants/types'

export const fetchModule=()=>dispatch=>{
    dispatch({
        type:GET_MODULE,
        payload:[
            { id: 1, name: "pro1",proId:"proId1" ,duration:"4 months", teamId:"man1"},
            { id: 2, name: "pro2",proId:"proId2"  ,duration:"6 months", teamId:"man2"},
            { id: 3, name: "pro3", proId:"code3" ,duration:"11 months", teamId:"man3"},
        ]
    })
}