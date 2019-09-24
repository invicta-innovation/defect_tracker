import {GET_PERIORITY,SHOW_MODAL_PERIORITY} from '../_constants/types';

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

export const showModal = (modaldata,priorityObj) =>dispatch=> {
    if(modaldata.action=='ADD'){
    dispatch({
        type: SHOW_MODAL_PERIORITY,
        modaldata: modaldata,
       payload:{}
      })
    }
    else if(modaldata.action=='EDIT'){
      dispatch({
          type: SHOW_MODAL_PERIORITY,
          modaldata: modaldata,
          payload:priorityObj
        })
      }
    }

