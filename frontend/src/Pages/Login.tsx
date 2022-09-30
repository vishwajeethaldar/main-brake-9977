import React, { useState, useContext, useEffect, FormEvent, ChangeEvent } from "react";
// import { AuthContext } from "../context/AuthContext";
import {DispatchProp, useDispatch, useSelector} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useAppDispatch, useAppSelector } from "../hooks/user";
import { login } from "../store/users/users.action";

type credsProp={
    email:string;
    password:string;
}

const Login = () => {
  const isAuth = useAppSelector((store)=>store.users.token);
  const [loginCreds, setLoginCreds] = useState<credsProp>({email:"",password:""});
  const navigate = useNavigate();
  const { state } = useLocation();
  // const { login } = useContext(AuthContext);
  const dispatch = useAppDispatch();

  const hanldeChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(loginCreds));
  };


  useEffect(()=>{
    if(isAuth){
      if (state.from) {
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  },[isAuth])

  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
