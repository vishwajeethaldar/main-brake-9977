import { Routes, Route } from "react-router-dom"
import { Projects } from "../Pages/Projects"
export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={"home"} />
        <Route path="/login" element={"Login"} />
        <Route path="/signup" element={"signup"} />
        <Route path="/downloads" element={"downloads"} />
        <Route path="/features" element={"features"} />
        <Route path="/tracker" element={"Tracker"} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/projects/id" element={"individual-project"} />
        <Route path="/teams" element={"teams"} />
        <Route path="/clients" element={"clients"} />
    </Routes>
  )
}