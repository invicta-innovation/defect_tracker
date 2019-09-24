import {GET_SUBMODULE} from '../../_constants/types'

export const fetchSubModule=()=>dispatch=>{
    dispatch({
        type:GET_SUBMODULE,
        payload:[
            { id: 1, name: "pro1",modId:"modId1" ,action:"act1"},
            { id: 2, name: "pro2",modId:"modId2"  ,action:"act2"},
            { id: 3, name: "pro3", modId:"modId3" ,action:"act3"},
        ]
    })
}