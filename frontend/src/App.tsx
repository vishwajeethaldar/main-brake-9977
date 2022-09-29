
import {useSelector, useDispatch} from "react-redux"
import Timer_Tracker from "./Components/Time_Tracker/Timer_Tracker";
import { useAppDispatch } from "./hooks/user";
import { MainRoutes } from "./Routes/MainRoutes";
import { login } from "./store/users/users.action"


function App() {
  return (
      <div>
      <Timer_Tracker/>
      <MainRoutes/>
      </div>

  )
}
export default App
