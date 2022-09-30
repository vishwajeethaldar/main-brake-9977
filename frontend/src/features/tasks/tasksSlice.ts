import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from "axios";
import { taskPropType, tasksSliceType } from "../types/types";
const DBLINK = "https://clockify-clone-app.herokuapp.com";
type task={
    name:string;
    billable:boolean;
    startTime?:number;
    endTime:number;
    totalTime?:number;
    userId:string;
    sTime?:string;
    eTime?:string;
    _id?:string;
}

// tasks action - gettasks

export const getTasks = createAsyncThunk(
    'tasks/getTasks',
    async({token, query=""}:{token:string, query?:string}, thunkapi)=>{
        // console.log(token)
        try{
            const res = await axios.get<taskPropType[]>(`${DBLINK}/tasks?q=${query}`, {
                headers:{
                    token:token
                }
            });
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

// add New task
export const addTask = createAsyncThunk(
    'tasks/addTasks',
    async({token, data}:{token:string,data:taskPropType}, thunkapi)=>{
        // console.log(token,data,"add")
        try{

            const res:AxiosResponse<taskPropType> = await axios({
                method:"POST",
                url:`${DBLINK}/tasks`,
                data:data,
                headers:{
                    token:token
                }
            })
            console.log(res,"add"); 
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

// update task
export const updateTask = createAsyncThunk(
    'tasks/updateTasks',
    async({token, data}:{token:string,data:task}, thunkapi)=>{
        // console.log(token,data)
        try{

            const res:AxiosResponse<taskPropType> = await axios({
                method:"PATCH",
                url:`${DBLINK}/tasks/${data._id}`,
                data:data,
                headers:{
                    token:token
                }
            })
            // console.log(res.data); 
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)
// delete Task
export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async({token, id}:{token:string,id:string}, thunkapi)=>{
        try{
            const res:AxiosResponse<string> = await axios({
                method:"DELETE",
                url:`${DBLINK}/tasks/${id}`,
                headers:{
                    token:token
                }
            })
            return id;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

const initialState:tasksSliceType = {
    tasks:[],
    loading:false,
    error:false
}
const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addTask.pending,(state, action)=>{
            state.loading=true
        })
        .addCase(addTask.fulfilled,(state, action:PayloadAction<taskPropType>)=>{
            state.loading=false;
            state.error= false;
            state.tasks = [...state.tasks, action.payload];
        })
        .addCase(addTask.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
        })
        .addCase(getTasks.pending, (state, action)=>{
            state.loading=true;
        })
        .addCase(getTasks.fulfilled, (state, action:PayloadAction<taskPropType[]>)=>{
            state.loading=false;
            state.error= false;
            state.tasks = action.payload

        })
        .addCase(getTasks.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
        })
        .addCase(updateTask.pending, (state, action)=>{
            state.loading=true;
        })
        .addCase(updateTask.fulfilled, (state, action:PayloadAction<taskPropType>)=>{
            state.loading=false;
            state.error= false;
            state.tasks = state.tasks.map((el)=>{
                if(el._id===action.payload._id)
                {
                    return action.payload
                }
                else
                {
                    return el
                }
            })
        })
        .addCase(updateTask.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
        })
        .addCase(deleteTask.pending, (state, action)=>{
            state.loading=true;
        })
        .addCase(deleteTask.fulfilled, (state, action:PayloadAction<string>)=>{
            state.loading=false;
            state.error= false;
            state.tasks = state.tasks.filter((el)=>{
                if(el._id!=action.payload)
                {
                    return el
                }
            })
        })
        .addCase(deleteTask.rejected,(state, action:PayloadAction<any>)=>{
            state.loading=false;
            state.error= true;
        })
    },
})

export default taskSlice.reducer