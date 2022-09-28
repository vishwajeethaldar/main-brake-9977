import axios,{AxiosResponse} from 'axios'
import 
{
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_SIGNUP_LOADING,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_ERROR,
    USER_LOGOUT,
} from './users.types'

type credsProp={
    email:string;
    password:string;
}

type response={
    token:string;
}

export const login = (cred:credsProp)=>async(dispatch:Function)=>{
        dispatch({type:USER_LOGIN_LOADING})
    try{
        let res:AxiosResponse<response[]> =  await axios.post("https://clockify-clone-app.herokuapp.com/users/login", cred)
        dispatch({type:USER_LOGIN_SUCCESS, payload:res.data}) 
        console.log(res.data) 
    }catch(e){
        dispatch({type:USER_LOGIN_ERROR})
    }
} 

