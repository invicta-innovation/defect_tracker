import {GET_DEFECT_STATUS} from "../_constants/types"

export const fetchDefectStatus = () => dispatch=>{
  dispatch({ 
      type: GET_DEFECT_STATUS,
      payload:[
          { id: 1, status: "new" },
          { id: 2, status: "open" },
          { id: 3, status: "fixed" },
          { id: 4, status: "closed" }
        ]
   })
}
    