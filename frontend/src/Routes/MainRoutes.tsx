import { Routes, Route } from "react-router-dom"
import Clockify from "./Clockify"
import Features from "./Features"

export const MainRoutes = () => {
  return (
    <Routes>
    
      {/* <Route path="/" element={<Clockify/>} /> */}
      <Route path="/" element={<Clockify/>} />
      <Route path="/features" element={<Features/>} />
     
       

        {/* <Route path="/" element={"home"} />
         <Route path="/features" element={"features"} />
        <Route path="/login" element={"Login"} />
        <Route path="/signup" element={"signup"} />
        <Route path="/downloads" element={"downloads"} />
       
        <Route path="/tracker" element={"Tracker"} />
        <Route path="/projects" element={"projects"} />
        <Route path="/projects/id" element={"individual-project"} />
        <Route path="/teams" element={"teams"} />
        <Route path="/clients" element={"clients"} /> */}
    </Routes>
  )
}
