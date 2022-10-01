import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { Axios, AxiosResponse } from "axios";
import { groupsType, groupSliceType } from "../types/types";
const DBLINK = "https://clockify-clone-app.herokuapp.com";

export const getGroups = createAsyncThunk(
    "group/getGroups", async(data:{token:string}, thunkapi) => {
        try{
            let res = await axios.get<groupsType[]>(`${DBLINK}/groups`, {
                headers : {
                    token: data.token
                }
            })
            console.log(res.data)
            return res.data;
        } catch(e:any){
            return thunkapi.rejectWithValue(e.message)
        }
    }
)

export const addGroups = createAsyncThunk(
    "group/addGroups", async(data:{token:string, data:groupsType}, thunkapi) => {
        try{
            let res:AxiosResponse<groupsType> = await axios(`${DBLINK}/groups`, {
                method: "POST",
                data: data.data,
                headers : {
                    token: data.token
                }
            })
            console.log(res.data);
            return res.data;
        } catch(e:any){
            return thunkapi.rejectWithValue(e.message)
        }
    }
)

export const deleteGroup = createAsyncThunk(
    'group/deleteGroups',
    async(data:{token:string,id:string}, thunkapi)=>{
        try{
            const res:AxiosResponse<groupsType> = await axios({
                method:"DELETE",
                url:`${DBLINK}/groups/${data.id}`,
                headers:{
                    token:data.token
                }
            })          
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

export const updateGroup = createAsyncThunk(
    'group/updateGroups',
    async(data:{token:string, data:{},id:string}, thunkapi)=>{
        console.log(data);
        
        try{
        // <projectType>
            const res:AxiosResponse<groupsType> = await axios({
                method:"PATCH",
                url:`${DBLINK}/groups/${data.id}`,
                data:data.data,
                headers:{
                    token:data.token
                }
            })
            console.log(res.data);
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

const initialState:groupSliceType = {
    loading: false,
    error: false,
    errorMessage: "",
    groups: []
}

const group:groupsType = {
    name: "",
    userId: ""
}

const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getGroups.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getGroups.fulfilled, (state, action:PayloadAction<groupsType[]>) => {
            state.loading = false,
            state.error = false,
            state.groups = action.payload
        })
        .addCase(getGroups.rejected, (state, action:PayloadAction<any>) => {
            state.error = true,
            state.loading = false,
            state.errorMessage = action.payload
        })
        .addCase(addGroups.pending, (state, action) => {
            state.loading = true
        })
        .addCase(addGroups.fulfilled, (state, action:PayloadAction<groupsType>) => {
            state.loading = false,
            state.error = false,
            state.groups = [...state.groups, action.payload]
        })
        .addCase(addGroups.rejected, (state, action:PayloadAction<any>) => {
            state.error = true,
            state.loading = false,
            state.errorMessage = action.payload
        })
        .addCase(deleteGroup.pending, (state, action) => {
            state.loading = true
        })
        .addCase(deleteGroup.fulfilled, (state, action:PayloadAction<groupsType>) => {
            state.loading = false,
            state.error = false,
            state.groups = [...state.groups, action.payload]
        })
        .addCase(deleteGroup.rejected, (state, action:PayloadAction<any>) => {
            state.error = true,
            state.loading = false,
            state.errorMessage = action.payload
        })
    },
})

export default groupsSlice.reducer;