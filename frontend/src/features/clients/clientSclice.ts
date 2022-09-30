import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import type { clientType, clientSliceType } from '../types/types'
import axios,{AxiosResponse} from "axios";

const DBLINK = "https://clockify-clone-app.herokuapp.com";

export const getClients = createAsyncThunk(
    'clients/getClients',
    async(data:{token:string, query?:string}, thunkapi)=>{
        try{
            const res = await axios.get<clientType[]>(`${DBLINK}/clients?q=${data.query}`, {
                headers:{
                    token:data.token
                }
            });
            return res.data;
        }catch(error:any){
            return thunkapi.rejectWithValue(error.message);
        }
    }
)

export const addClients = createAsyncThunk(
    'clients/addClients',
    async(data:{token:string,data:clientType}, thunkapi)=>{
        try{
            const res:AxiosResponse<clientType> = await axios({
                method:"POST",
                url:`${DBLINK}/clients`,
                data:data.data,
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

export const deleteClient = createAsyncThunk(
    'clients/deleteClient',
    async(data:{token:string,id:string}, thunkapi)=>{
        try{
            const res:AxiosResponse<clientType> = await axios({
                method:"DELETE",
                url:`${DBLINK}/clients/${data.id}`,
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


// const initialState:clientSliceType = {
    
// }