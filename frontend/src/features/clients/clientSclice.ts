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


const initialState:clientSliceType = {
    loading:false,
    error:false,
    errmsg:"",
    clients:[]
}

const clientSlice = createSlice({
    name:"clientsworkspace",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addClients.pending,(state, action   )=>{
            state.loading =true;
        })
        .addCase(addClients.fulfilled, (state, action:PayloadAction<clientType>)=>{
            state.loading =false;
            state.error =false;
            state.clients = [...state.clients,action.payload]
        })
        .addCase(addClients.rejected, (state, action:PayloadAction<any>)=>{
            state.errmsg = action.payload;
            state.error = true;
            state.loading = false
        })
        .addCase(getClients.pending,(state, action)=>{
            state.loading =true;
        })
        .addCase(getClients.fulfilled, (state, action:PayloadAction<clientType[]>)=>{
            state.loading =false;
            state.error =false;
            state.clients = action.payload    
        })
        .addCase(getClients.rejected, (state, action:PayloadAction<any>)=>{
            state.errmsg = action.payload;
            state.error = true;
            state.loading = false
        })
        .addCase(deleteClient.pending,(state, action)=>{
            state.loading =true;
        })
        .addCase(deleteClient.fulfilled, (state, action:PayloadAction<clientType>)=>{
            state.loading =false;
            state.error =false;
            state.clients = state.clients.filter((item)=>item._id!==action.payload._id)   
        })
        .addCase(deleteClient.rejected, (state, action:PayloadAction<any>)=>{
            state.errmsg = action.payload;
            state.error = true;
            state.loading = false
        })


    },
})

export default clientSlice.reducer