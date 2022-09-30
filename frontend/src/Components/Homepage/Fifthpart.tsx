import React from 'react'
import { Link } from 'react-router-dom'
import "./FifthPart.css"

const Fifthpart = () => {
  return (
    <div>
      <div className='maindiv'>
        <div className='seconddiv'>
          <h2 style={{
            color: "#78909C",
            fontSize: "19px",
            paddingBottom: "16px",

            fontWeight: "bold",
          }}>TIMEKEEPING</h2>

          <div>
            <h4 className='tracker'>Timer</h4>
            <p className='details'>Track work hours in real time</p>
          </div>

          <div>
            <h4 className='tracker'>Timesheet</h4>
            <p className='details'>Enter time in weekly timesheet</p>
          </div>

          <div>
            <h4 className='tracker'>Calender</h4>
            <p className='details'>Visually block out and manage time</p>
          </div>

          <div>
            <h4 className='tracker'>Autotracker</h4>
            <p className='details'>Track apps and website you use</p>
          </div>

          <div>
            <h4 className='tracker'>Kiosk</h4>
            <p className='details'>Clock in form a shared device</p>
          </div>


        </div>




        <div className='seconddiv'>
          <img style={{
            marginTop: "60px",
            height: "100%",
            width: "100%"
          }} src="https://clockify.me/assets/images/feature-time-tracker-methods.svg" alt="" />
        </div>

      </div>

      {/* REPORTING STARTS HERE */}

      <div className='maindiv'>
      <div className='seconddiv'>
          <img style={{
            marginTop: "60px",
            height: "100%",
            width: "100%"
          }} src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" alt="" />
        </div>


        <div className='seconddiv'>
          <h2 style={{
            color: "#78909C",
            fontSize: "19px",
            paddingBottom: "16px",
            marginLeft:"190px",

            fontWeight: "bold",
          }}>TIMEKEEPING</h2>

          <div className='report'>
            <h4 className='tracker'>Timer</h4>
            <p className='details'>Track work hours in real time</p>
          </div>

          <div className='report' >
            <h4 className='tracker'>Timesheet</h4>
            <p className='details'>Enter time in weekly timesheet</p>
          </div>

          <div className='report' >
            <h4 className='tracker'>Calender</h4>
            <p className='details'>Visually block out and manage time</p>
          </div>

          <div className='report' >
            <h4 className='tracker'>Autotracker</h4>
            <p className='details'>Track apps and website you use</p>
          </div>

          <div className='report' >
            <h4 className='tracker'>Kiosk</h4>
            <p className='details'>Clock in form a shared device</p>
          </div>


        </div>




        

      </div>


      {/* MANAGEMENT STARTS HERE */}

      <div className='maindiv'>
        <div className='seconddiv'>
          <h2 style={{
            color: "#78909C",
            fontSize: "19px",
            paddingBottom: "16px",

            fontWeight: "bold",
          }}>TIMEKEEPING</h2>

          <div>
            <h4 className='tracker'>Timer</h4>
            <p className='details'>Track work hours in real time</p>
          </div>

          <div>
            <h4 className='tracker'>Timesheet</h4>
            <p className='details'>Enter time in weekly timesheet</p>
          </div>

          <div>
            <h4 className='tracker'>Calender</h4>
            <p className='details'>Visually block out and manage time</p>
          </div>

          <div>
            <h4 className='tracker'>Autotracker</h4>
            <p className='details'>Track apps and website you use</p>
          </div>

          <div>
            <h4 className='tracker'>Kiosk</h4>
            <p className='details'>Clock in form a shared device</p>
          </div>


        </div>




        <div className='seconddiv'>
          <img style={{
            marginTop: "40px",
            height: "100%",
            width: "100%"
          }} src="https://clockify.me/assets/images/feature-team-scheduling.svg" alt="" />
        </div>



      </div>


      <Link  to={`/features`} style={{ textDecoration: "none" }}><button className='featbtn'>SEE ALL FEATURES</button></Link>



    </div>


  )
}

export default Fifthpart