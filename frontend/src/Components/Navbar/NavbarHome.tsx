import React from 'react'

import { Link } from "react-router-dom";

import {
  Maindivline,
  Plinkone,
  Signbutt,
  Plinksecond,
  Plinthird
} from "./Navbarcss";





const NavbarHome = () => {
  return (
    <div>

<Maindivline >
        <Link
          to={`/`}
          style={{
            marginLeft: "10%",
            marginTop: "36px",
            color: "#5A6B7B",
            textDecoration: "none"
          }}
        >
          <img
            src="https://clockify.me/assets/images/clockify-logo.svg"
            alt=""
            style={{height:"40PX",marginTop:"-5PX"}}
          />
        </Link>

        <Link
          to={`/features`}
          style={{ textDecoration: "none", marginLeft: "5%" }}
        >
          <Plinkone>FEATURES</Plinkone>
        </Link>

        <Link
          to={`/downloads`}
          style={{
            textDecoration: "none",
            marginLeft: "5%"
          }}
        >
          <Plinkone>DOWNLOAD</Plinkone>
        </Link>

        <Link
          to={`/login`}
          style={{
            marginLeft: "34%",
            textDecoration: "none"
          }}
        >
          <Plinksecond>LOG IN</Plinksecond>
        </Link>

        <Signbutt>
          <Link
            to={`/signup`}
            style={{
              borderRadius:"35px",
              color: "#03a9f4",
              textDecoration: "none",
              fontSize: "15.0px",
              
         
            }}
          >
            <Plinthird>SIGN UP FREE </Plinthird>
          </Link>
        </Signbutt>
      </Maindivline>
    </div>
  )
}

export default NavbarHome