import { Routes, Route } from "react-router-dom"

import RequireAuth from "../hoc/RequireAuth"
import Clients from "../Pages/Clients"
import Login from "../Pages/Login"
import { Projects } from "../Pages/Projects"
import SignUp from "../Pages/SignUp"
import Team from "../Pages/Team"
import { TimeTracker } from "../Pages/TimeTracker"
import Clockify from "./Clockify"
import Features from "./Features"

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Clockify/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/downloads" element={"downloads"} />
        <Route path="/features" element={<Features/>} />
        <Route path="/tracker" element={<RequireAuth><TimeTracker /></RequireAuth>} />
        <Route path="/projects" element={<RequireAuth><Projects/></RequireAuth>} />
        <Route path="/projects/id" element={"individual-project"} />
        <Route path="/teams" element={<RequireAuth><Team /></RequireAuth>} />
        <Route path="/clients" element={<Clients />} />
    </Routes>
  )
}
