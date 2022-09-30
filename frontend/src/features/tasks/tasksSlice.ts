import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from "axios";
import { taskPropType, tasksSliceType } from "../types/types";
const DBLINK = "https://clockify-clone-app.herokuapp.com";


// tasks action - gettasks

export const getTasks = createAsyncThunk(
    'tasks/getTasks',
    async({token, query}:{token:string, query?:string}, thunkapi)=>{
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
        try{

            const res:AxiosResponse<taskPropType> = await axios({
                method:"POST",
                url:`${DBLINK}/tasks`,
                data:data,
                headers:{
                    token:token
                }
            })
            console.log(res.data); 
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
            const res:AxiosResponse<taskPropType> = await axios({
                method:"DELETE",
                url:`${DBLINK}/tasks/${id}`,
                headers:{
                    token:token
                }
            })
            console.log(res.data); 
            return res.data;
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
    },
})

export default taskSlice.reducer