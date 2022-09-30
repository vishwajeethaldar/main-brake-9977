import { ADD_TASKS_LOADING,ADD_TASKS_SUCCESS,ADD_TASKS_ERROR,
     GET_TASKS_LOADING,GET_TASKS_SUCCESS,GET_TASKS_ERROR,
    REMOVE_TASKS_LOADING,REMOVE_TASKS_SUCCESS,REMOVE_TASKS_ERROR,
     UPDATE_TASKS_LOADING, UPDATE_TASKS_SUCCESS,UPDATE_TASKS_ERROR } from "./tasks_types";
const initialState={
    tasks:[],
    loading:false,
    error:false
}
type ReducerProps={
    type:string;
    payload:[]
}     
export const tasksReducer=(state=initialState,{type,payload}:ReducerProps)=>{
    switch(type)
    {
        case ADD_TASKS_LOADING:{
            return{
               ...state,loading:true
            }
        }
        case ADD_TASKS_SUCCESS:{
            return {
                ...state,loading:false,tasks:[...state.tasks,payload]
            }
        }
        case ADD_TASKS_ERROR:{
            return{
                ...state,error:true,loading:false
            }
        }
        case GET_TASKS_LOADING:{
            return {
                ...state,loding:true
            }
        }
        case GET_TASKS_SUCCESS:{
            console.log(payload)
            return {
                ...state,loading:false,tasks:payload
            }
        }
        case GET_TASKS_ERROR:{
            return {
                ...state,loading:false,error:true
            }
        }
        default:return state;
    }
}