import axios, { AxiosResponse } from "axios";
import { ADD_TASKS_LOADING,ADD_TASKS_SUCCESS,ADD_TASKS_ERROR,
    GET_TASKS_LOADING,GET_TASKS_SUCCESS,GET_TASKS_ERROR,
REMOVE_TASKS_LOADING,REMOVE_TASKS_SUCCESS,REMOVE_TASKS_ERROR,
UPDATE_TASKS_LOADING, UPDATE_TASKS_SUCCESS,UPDATE_TASKS_ERROR } from "./tasks_types";
type addProps={
    name:string;
    billable:boolean;
    startTime?:number;
    endTime:number;
    totalTime?:number;
    userId:string;
}
export const addTask=(data:addProps)=>async(dispatch:Function)=>{
    console.log(data)
    dispatch({type:ADD_TASKS_LOADING})
    try{
        const response= await axios("https://clockify-clone-app.herokuapp.com/tasks",{
            method:"post",
            data:data,
            headers:{
                token:"6333f6b05df0b3cce904692c:a@gmail.com:12345678"
            }
        })
        dispatch({type:ADD_TASKS_SUCCESS,payload:response.data})
    }catch(e)
    {
        dispatch({type:ADD_TASKS_ERROR})
    }
}
export const getTasks=(q:string)=>async(dispatch:Function)=>{
        dispatch({type:GET_TASKS_LOADING})
        try{
            const response= await axios(`https://clockify-clone-app.herokuapp.com/tasks?q=${q}`,{
                headers:{
                    token:"6333f6b05df0b3cce904692c:a@gmail.com:12345678"
                }
            })
            dispatch({type:GET_TASKS_SUCCESS,payload:response.data})
        }catch(e){
            dispatch({type:GET_TASKS_ERROR})
        }
}