import React from 'react'
import { SECOND_PAGE_H1, SECOND_PAGE_H2 } from './Homepagecss'
import "./SixthPart.css"

const SixthPage = () => {
  return (
    <div>
        <SECOND_PAGE_H1 style={{marginLeft:"600px"}}>
        Time tracking apps
        </SECOND_PAGE_H1>

        <SECOND_PAGE_H2>
        Clockify works across devices. Track time from anywhere — all <br/>
        <span style={{
          marginLeft:"170px"
        }}>data is synced online..</span>
        </SECOND_PAGE_H2>



        {/* APPS */}

        <div className='appfirstdiv'>
            <div>
            <img src="https://clockify.me/assets/images/time-tracking-app-desktop.png" alt="" />
            <h3 style={{
            textAlign:"center"
            }}>DESKTOP APP</h3>
            <button className='appbtns'><a  href="https://clockify.me/windows-time-tracking" style={{textDecoration:"none"}}>Windows</a></button>
            <button className='appbtns'><a href="https://clockify.me/mac-time-tracking" style={{textDecoration:"none"}}>Mac</a></button>
            <button className='appbtns'><a href="https://clockify.me/linux-time-tracking" style={{textDecoration:"none"}}>Linux</a></button>


            </div>


            <div>
            <img style={{marginLeft:"55px",
           }} src="https://clockify.me/assets/images/time-tracking-app-web.png" alt="" />
            <h3 style={{
            textAlign:"center",
             marginLeft:"55px"
            
            }}>WEB APP</h3>
             <button style={{marginLeft:"128px"}} className='appbtns'><a  href="https://clockify.me/windows-time-tracking" style={{textDecoration:"none"}}>Edge</a></button>
            <button style={{marginLeft:"24px"}} className='appbtns'><a href="https://clockify.me/mac-time-tracking" style={{textDecoration:"none"}}>Chrome</a></button>
            <button style={{marginLeft:"24px"}} className='appbtns'><a href="https://clockify.me/linux-time-tracking" style={{textDecoration:"none"}}>Firefox</a></button>


            </div>
        </div>


        {/* MOBILE AND KIOSK */}

        <div style={{marginTop:"200px"}} className='appfirstdiv'>
            <div>
            <img src="https://clockify.me/assets/images/time-tracking-app-mobile.png" alt="" />
            <h3 style={{
            textAlign:"center"
            }}>MOBILE APP</h3>
            <button style={{marginLeft:"120px"}} className='appbtns'><a  href="https://clockify.me/windows-time-tracking" style={{textDecoration:"none"
          }}>Android</a></button>
            <button className='appbtns'><a href="https://clockify.me/mac-time-tracking" style={{textDecoration:"none"}}>iOS</a></button>
            {/* <button className='appbtns'><a href="https://clockify.me/linux-time-tracking" style={{textDecoration:"none"}}>Linux</a></button> */}


            </div>


            <div>
            <img style={{marginLeft:"55px",
           }} src="https://clockify.me/assets/images/time-tracking-app-kiosk.png" alt="" />
            <h3 style={{
            textAlign:"center",
             marginLeft:"55px"
            
            }}>KIOSK APP</h3>
             <button style={{
            paddingTop:"12px",
            paddingBottom:"24px",
            paddingLeft:"10px",
            paddingRight:"10px",
            marginLeft:"250px"}} className='appbtns'><a  href="https://clockify.me/windows-time-tracking" style={{textDecoration:"none"}}>Any Device</a></button>
            {/* <button style={{marginLeft:"24px"}} className='appbtns'><a href="https://clockify.me/mac-time-tracking" style={{textDecoration:"none"}}>iOS</a></button> */}
            {/* <button style={{marginLeft:"24px"}} className='appbtns'><a href="https://clockify.me/linux-time-tracking" style={{textDecoration:"none"}}>Firefox</a></button> */}


            </div>
        </div>
    </div>
  )
}

export default SixthPage