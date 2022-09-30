import {
    PROJECT_GET_LOADING,
    PROJECT_GET_SUCCESS,
    PROJECT_GET_ERROR,
    PROJECT_POST_LOADING,
    PROJECT_POST_SUCCESS,
    PROJECT_POST_ERROR,
    PROJECT_PATCH_LOADING,
    PROJECT_PATCH_SUCCESS,
    PROJECT_PATCH_ERROR,
    PROJECT_DELETE_LOADING,
    PROJECT_DELETE_SUCCESS,
    PROJECT_DELETE_ERROR,
} from "./project.type"

export type projectType= {
    name:string;
    client?:string;
    tracked?:number;
    amount?:number;
    billable?:boolean;
    access?:boolean;
    color?:string;
    archive?:boolean;
    starred?:boolean;
    startTime?:number;
    endTime?:number;
    template?:string,
    userId:string,
}

const projectState = {
    name:"",
    client:"",
    tracked:0,
    amount:0,
    billable:false,
    access:true,
    color:"",
    archive:false,
    starred:false,
    startTime:0,
    endTime:0,
    template:"",
    userId:"",
}

export type intStateType = {
    isLoading:boolean;
    isError:boolean;
    projects:Array<projectType>;
    project:projectType;
    token:string;
}

const reducerIntState:intStateType = {
    isLoading:false,
    isError:false,
    projects:[],
    project:projectState,
    token:localStorage.getItem("token")||"",
}

export const projectReducer = (state=reducerIntState, {type, payload}:{type:string, payload?:Array<projectType>|projectType|string})=>{
   
    switch(type){
        
        case PROJECT_GET_LOADING:
            return {
                ...state,isLoading:true,isError:false
            }
        case PROJECT_GET_SUCCESS:
            return {
                ...state,isLoading:true,isError:false, projects:payload
            }
        case PROJECT_GET_ERROR:
            return {
                ...state,isLoading:false,isError:true
            }
        case PROJECT_POST_LOADING:
            return {
            ...state,isLoading:true,isError:false
            }
        case PROJECT_POST_SUCCESS:
            return {
                ...state,isLoading:true,isError:false, projects:[state.projects,payload]
            }
        case PROJECT_POST_ERROR:
            return {
                 ...state,isLoading:false,isError:true
            }
        case PROJECT_PATCH_ERROR:
            return {
              ...state,isLoading:false,isError:true   
            }
        case PROJECT_PATCH_LOADING:
            return {
            ...state,isLoading:true,isError:false     
            }
        case PROJECT_PATCH_SUCCESS:
            return {
                
            }
        case PROJECT_DELETE_LOADING:
            return {
           ...state,isLoading:true,isError:false      
            }
        case PROJECT_DELETE_SUCCESS:
            return {
            }
        case PROJECT_DELETE_ERROR:
            return {
                 ...state,isLoading:false,isError:true
            } 
        default:
            return state;
    }
} 