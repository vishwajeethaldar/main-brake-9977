
import {useSelector, useDispatch} from "react-redux"
import { useAppDispatch } from "./hooks/user";
import { MainRoutes } from "./Routes/MainRoutes";
import { login } from "./store/users/users.action"
import Navbar from "./Components/Navbar/NavbarHome"
import SecondPart from "./Components/Homepage/SecondPart"
import ThirdPart from "./Components/Homepage/ThirdPart"
import FourthPart from "./Components/Homepage/FourthPart"
import FifthPart from "./Components/Homepage/Fifthpart"
import SixthPart from "./Components/Homepage/SixthPart"


function App() {
  return (
      <div>
        <Navbar/>
        <SecondPart/>
        <ThirdPart/>
        <FourthPart/>
        <FifthPart/>
        <SixthPart/>
    </div>
      <MainRoutes/>
      </div>
  )
}
export default App
