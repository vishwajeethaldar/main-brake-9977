import React,{ReactElement, ReactNode} from 'react';
import { Navigate, RelativeRoutingType, To } from "react-router-dom";
import { useAppSelector } from "../hooks/user";

type AuthProps = {
    children : ReactElement
}

const RequireAuth = ({children}:AuthProps) => {
  const token = useAppSelector((store)=>store.users.token);
  if(!token){
    return children
  }

  return <Navigate to="/login" replace={true} />
  
};

export default RequireAuth;