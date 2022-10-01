import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { userSliceState, userType } from "../types/types";

const DBLINK = "https://clockify-clone-app.herokuapp.com";

// Action
export const addUser = createAsyncThunk(
    "users/postSignup",
    async(data:{name:string,email:string, password:string}, thunkApi)=>{
        try{
            const responce = await axios.post<string>(`${DBLINK}/users/signup`, data)
            return responce.data
        }catch(error:any){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

const initialState:userSliceState = {
    loading:false,
    error:false,
    errmsg:"",
    successMsg:""
}
// Slice

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addUser.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(addUser.fulfilled,(state, action:PayloadAction<string>)=>{
             state.loading=false,
             state.error=false
             state.successMsg = action.payload   
        })
        .addCase(addUser.rejected, (state, action:PayloadAction<any>)=>{
            state.loading=false,
            state.errmsg = action.payload,
            state.error = true
        })

    }
})


export default usersSlice.reducer