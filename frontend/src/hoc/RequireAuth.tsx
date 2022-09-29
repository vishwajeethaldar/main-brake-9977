// import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/user";
// import { AuthContext } from "../context/AuthContext";

type AuthProps = {
    children : JSX.Element;
}

type ReturnAuth = {

}

const RequireAuth = ({ children }:AuthProps) => {
  const isAuth = useAppSelector((store)=>store.users.token);
  // const isAuth = localStorage.getItem("token");
  const { pathname } = useLocation();
  let navigate = useNavigate();
  // const switchToLogin = () => {navigate("/login")}
  console.log(isAuth);
  if (isAuth) {
    return children;
  } 
  else {
    return (
      // Redirecting to Login page
      // <Navigate />
      <>Login</>
    );
  }
};

export default RequireAuth;