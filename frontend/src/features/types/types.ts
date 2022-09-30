export type userType = {
    name:string;
    email:string;
    password:string

}

export type userSliceState = {
    loading:boolean;
    error:boolean;
    errmsg:string;
    token:string;  
    isAuth:boolean;
    regUser?:string;

}


export type projectType = {
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

export type projectsSliceType = {
    loading:boolean;
    error:boolean;
    errmsg:string;
    products:projectType[];
    product:projectType;

}

export type projectPostProp = {
    token:string;
    data:projectType
}