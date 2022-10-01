import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { userSliceState, userType,authStateSliceType, authResType } from "../types/types";
const DBLINK = "https://clockify-clone-app.herokuapp.com";

// login action 
export const login = createAsyncThunk(
    "users/auth/login",
    async(data:{email:string, password:string}, thunkApi)=>{
        try{
            const responce = await axios.post<authResType>(`${DBLINK}/users/login`, data)
            return responce.data
        }catch(error:any){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)



const initialState: authStateSliceType = {
    loading: false,
    error: false,
    token: localStorage.getItem("token") || "",
    isAuth: localStorage.getItem("token")?true:false
}



const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout(state){
            console.log("hello")
            state.isAuth=false
            state.token=""
            localStorage.removeItem("token")
        }
    },
    extraReducers(builder) {
        builder.addCase(login.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(login.fulfilled,(state, action:PayloadAction<authResType>)=>{
             state.loading=false,
             state.isAuth = true,
             state.token = action.payload.token 
             localStorage.setItem("token",action.payload.token)
        })
        .addCase(login.rejected, (state, action:PayloadAction<any>)=>{
            state.loading=false,
            state.isAuth = false,
            state.error = true
        })
        
    }
})

export const {logout} =authSlice.actions
export default authSlice.reducer