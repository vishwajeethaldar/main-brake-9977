import { Routes, Route } from "react-router-dom"

import RequireAuth from "../hoc/RequireAuth"
import Clients from "../Pages/Clients"
import Login from "../Pages/Login"
import { Projects } from "../Pages/Projects"
import SignUp from "../Pages/SignUp"
import Team from "../Pages/Team"
import { TimeTracker } from "../Pages/TimeTracker"
import Home from "../Pages/Home"
import Features from "./Features"
import Downloads from "./Downloads"

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/downloads" element={<Downloads/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/tracker" element={<RequireAuth><TimeTracker /></RequireAuth>} />
        <Route path="/projects" element={<RequireAuth><Projects/></RequireAuth>} />
        <Route path="/projects/id" element={"individual-project"} />
        <Route path="/teams" element={<RequireAuth><Team /></RequireAuth>} />
        <Route path="/clients" element={<RequireAuth><Clients /></RequireAuth>} />
    </Routes>
  )
}
