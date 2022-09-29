import { Routes, Route } from "react-router-dom"
import Login from "../Pages/Login"
import Timer_Tracker from "../Components/Time_Tracker/Timer_Tracker"
import { Projects } from "../Pages/Projects"
import Team from "../Pages/Team"
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={"home"} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={"signup"} />
        <Route path="/downloads" element={"downloads"} />
        <Route path="/features" element={"features"} />
        <Route path="/tracker" element={<Timer_Tracker/>} />
        <Route path="/projects" element={"projects"} />
        <Route path="/tracker" element={"Tracker"} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/id" element={"individual-project"} />
        <Route path="/teams" element={<Team />} />
        <Route path="/clients" element={"clients"} />
    </Routes>
  )
}
