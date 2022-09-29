import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { useAppDispatch } from "./hooks/user";
import { login } from "./store/users/users.action"
import Navbar from "./Components/Navbar/NavbarHome"
import SecondPart from "./Components/Homepage/SecondPart"
import ThirdPart from "./Components/Homepage/ThirdPart"
import FourthPart from "./Components/Homepage/FourthPart"
import FifthPart from "./Components/Homepage/Fifthpart"
import SixthPart from "./Components/Homepage/SixthPart"

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
useEffect(()=>{
  dispatch(login(user))
})

  return (
      <div>
        <Navbar/>
        <SecondPart/>
        <ThirdPart/>
        <FourthPart/>
        <FifthPart/>
        <SixthPart/>
        
       
      {/* <form>
        <input type={"email"} name={"email"}/>
        <input type={"text"} name={"password"}/>
        <button type="submit">Login</button>
      </form> */}
    </div>
  )
}
export default App
