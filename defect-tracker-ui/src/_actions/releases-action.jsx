import {GET_RELEASES} from '../_constants/types';

export const fetchReleases = () =>dispatch=>{
    dispatch({
        type:GET_RELEASES,
        payload:[
            {id:1, releaseName: "Alpha"},
            {id:2, releaseName: "Beta"},
            {id:3, releaseName: "Gama"},
            {id:4, releaseName: "Dev_Invicta"},
        ]
    })
}