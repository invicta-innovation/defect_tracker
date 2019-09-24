import {GET_PROJECT} from '../_constants/types'

export const fetchProject=()=>dispatch=>{
    dispatch({
        type:GET_PROJECT,
        payload:[
            { id: 1, name: "pro1",code:"code1" ,duration:"4 months", manager:"man1",status:"stat1",action:"act1"},
            { id: 2, name: "pro2",code:"code2"  ,duration:"6 months", manager:"man2",status:"stat2",action:"act2"},
            { id: 3, name: "pro3", code:"code3" ,duration:"11 months", manager:"man3",status:"stat3",action:"act3"},
        ]
    })
}