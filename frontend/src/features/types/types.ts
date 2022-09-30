export type userType = {
    name:string;
    email:string;
    password:string

}

export type userSliceState = {
    loading:boolean;
    error:boolean;
    errmsg:string;
    successMsg:string;
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


export type clientType = {
    name:string;
    address?:string;
    note?:string
    archive?:boolean;
    userId:string;
}

export type clientSliceType = {
    loading:boolean;
    error:boolean;
    errmsg:string;
    clients:clientType[]
}


export type authStateSliceType = {
    loading: boolean;
    error: boolean;
    token: string;
    isAuth: boolean;
}
export type authAtionpropType = {
    type: string;
    payload: { status: string, token: string, username: string, email: string, password: string, message:string };
}

export type authResType = {
    token: string;
    status:string
}

export type taskPropType={
    name:string;
    billable:boolean;
    startTime?:number;
    endTime:number;
    totalTime?:number;
    userId:string;
}
export type tasksSliceType = {
    tasks:taskPropType[],
    loading:boolean,
    error:boolean
}

export type groupsType = {
    name: string;
    userId: string
}

export type groupSliceType = {
    loading: boolean,
    error: boolean,
    errorMessage: string,
    groups: groupsType[]
}