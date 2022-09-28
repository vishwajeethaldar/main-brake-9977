import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import Timer_Tracker from "./Components/Time_Tracker/Timer_Tracker";
import { useAppDispatch } from "./hooks/user";
import { login } from "./store/users/users.action"

type stateInter = {
  loading:boolean;
  error:boolean;
  token:string;   
  isAuth:boolean;
}

function App() {
  // const store = useSelector<stateInter>((store)=>store.user)
  const dispatch =  useAppDispatch()
  // useDispatch()
  const user = {
    email:"p@gmail.com", password:"12345678"
  }
// useEffect(()=>{
//   dispatch(login(user))
// })

  return (
      <div>
      {/* <form>
        <input type={"email"} name={"email"}/>
        <input type={"text"} name={"password"}/>
        <button type="submit">Login</button>
      </form> */}
      <Timer_Tracker/>
    </div>
  )
}
export default App
