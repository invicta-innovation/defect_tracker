import {GET_DEFECT_STATUS} from "../_constants/types"

export const fetchDefectStatus = () => dispatch=>{
  dispatch({ 
      type: GET_DEFECT_STATUS,
      payload:[
          { id: 1, status: "New" },
          { id: 2, status: "Open" },
          { id: 3, status: "Fixed" },
          { id: 4, status: "Closed" },
          { id: 5, status: "Reopen" },
          { id: 6, status: "Duplicate" },
          { id: 7, status: "Rejected" }
        ]
   })
}
