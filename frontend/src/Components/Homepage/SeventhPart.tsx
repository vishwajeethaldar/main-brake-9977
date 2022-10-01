import React from 'react'
import { UNLIMITED_BUTTON, TICK } from './Homepagecss'

const SeventhPart = () => {
    return (
        <div style={{border:"2px solid black", marginTop:"145px"}}>

            <div style={{ marginLeft: "100px" }}>

                <div style={{ display: "flex", marginLeft: "16%" }}>

                    <div>
                        <img src="https://clockify.me/assets/images/free-forever-clock-4.svg" alt="" style={{ marginRight: "90px", height: "450px" }} />

                    </div>
                    <div style={{ marginTop: "30px", marginLeft: "30px", width: "600px" }}>
                        <h3 style={{ fontSize: "72px", color: "#03A9F4", marginRight: "350px",fontWeight:"bold", backgroundColor:"white", fontFamily:"sans-serif" }}>FREE <br /><span style={{fontSize:"32px",marginTop:"-65px"}}>FOREVER!</span></h3>
                        <div style={{ marginTop:"-50px"}}>
                        <UNLIMITED_BUTTON><TICK>✓</TICK>Unlimited users</UNLIMITED_BUTTON>
                        <UNLIMITED_BUTTON><TICK>✓</TICK> Unlimited tracking</UNLIMITED_BUTTON>
                        <UNLIMITED_BUTTON><TICK>✓</TICK>Unlimited projects</UNLIMITED_BUTTON>
                        </div>

                        <a href='https://clockify.me/pricing' style={{fontSize:"19px", color:" #03A9F4", cursor:"pointer", fontFamily:"sans-serif", textDecoration:"none"}}>Upgrade </a>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default SeventhPart