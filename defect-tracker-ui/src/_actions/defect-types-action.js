import {GET_DEFECT_TYPES} from "../_constants/types"

export const fetchDefectTypes = () => dispatch=>{
  dispatch({ 
      type: GET_DEFECT_TYPES,
      payload:[
          { id: 1, defectTypeName: "UI" },
          { id: 2, defectTypeName: "Functionality" },
          { id: 3, defectTypeName: "Performance" },
          
        ]
   })
}