import axios from "axios"
// import dotenv from "dotenv"
import { processResult } from "immer/dist/internal"
import { Dispatch } from "redux"
import {
    PROJECT_GET_LOADING,
    PROJECT_GET_SUCCESS,
    PROJECT_GET_ERROR,
    PROJECT_POST_LOADING,
    PROJECT_POST_SUCCESS,
    PROJECT_POST_ERROR,
    PROJECT_PATCH_LOADING,
    PROJECT_PATCH_SUCCESS,
    PROJECT_PATCH_ERROR,
    PROJECT_DELETE_LOADING,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_ERROR,
} from "./project.type"

// dotenv.config()



export const getProjects = ()=>async(dispatch:Dispatch)=>
    {      
        dispatch({type:PROJECT_GET_LOADING})
    try{
        let res =  await axios.get(`https://clockify-clone-app.herokuapp.com/projects`,{
            headers:{
                'token':'6333f6b05df0b3cce904692c:a@gmail.com:12345678'
            }
        })
        console.log(res);
        
        dispatch({type:PROJECT_GET_SUCCESS, payload:res.data})
    }catch(e){
        dispatch({type:PROJECT_GET_ERROR}) 
    }
    }
