import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import { useAppDispatch } from "./hooks/user";
import { MainRoutes } from "./Routes/MainRoutes";
import { login } from "./store/users/users.action"



function App() {
 
  return (
    <div>
      <MainRoutes/>
    </div>
  )
}
export default App
