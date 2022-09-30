import React from 'react'
import { Link } from "react-router-dom";
import "./SecondPart.css"

const SecondPart = () => {
    return (
        <div>
            <h1 style={{
                fontSize: "40px",
                color: "#3d4853",
                marginLeft: "350px",
                marginTop: "100px",
                fontFamily: "sans-serif"

            }}>The most popular free <span style={{ color: "#03A9F4", }}>time tracker</span> for teams</h1>
            <h2 className='sechead' style={
                {
                    fontSize: '20.8px',


                }
            }><span style={{
                marginLeft: "30px",
                display: "inline",
                overflow: "hidden",
                textOverflow: "clip",
            }}>Time tracking software used by millions. Clockify is a time tracker </span>
                <br />

                <span style={{
                    marginLeft: "80px"
                }}>timesheet app that lets you track work hours across projects.</span><br /><span style={{
                    marginLeft: "180px"
                }}>Unlimited users, free forever.</span>
            </h2>


            <Link to={`/signup`} style={{ textDecoration: "none" }}>

                <button className='tracetimebtn'> START TRACING TIME-IT'S FREE!</button>

            </Link>
            <br />
            <br />


            <a className='anchor'
                style={{
                    textDecoration: "none",
                    fontFamily: "sans-serif",
                    fontSize: "13px"
                }}
                href="https://clockify.me/customers"
            >
                <img
                    src="https://clockify.me/assets/images/signed-up-icon.svg"
                    alt=""
                />
                145,876  people signed up last month
            </a>

            <div>
                <img className='disney' src="https://clockify.me/assets/images/customers-light-gray-3.svg" alt="" />
            </div>

        </div>
    )
}

export default SecondPart