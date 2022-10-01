import React from 'react'
import { SECOND_PAGE_H1, SECOND_PAGE_H2 } from './Homepagecss'
import { Link } from "react-router-dom";
import "./EightPart.css"

const EighthPart = () => {
  return (
    
          <div style={{ marginTop: "150px", border:"2px solid green", height:"400px" }}>
            <br />
            <br />
            <br />
            <br />

            <SECOND_PAGE_H1 style={{
                fontFamily:"sans-serif"
            }}>
                Start tracking time with Clockify
      </SECOND_PAGE_H1>
           
                <p className='support'>
              <div style={{marginRight:"45px"}}> 24/7 Support</div>

              <div  style={{marginRight:"45px"}}>  •</div>

               <div  style={{marginRight:"45px"}}> Cancel anytime</div>

                <div  style={{marginRight:"45px"}}>•</div>

              <div  style={{marginRight:"45px"}}>  Free forever</div>
                </p>
      

            <Link to={`/signup`} style={{ textDecoration: "none" }}>
                <button className='freeacc'>
                    CREATE FREE ACCOUNT
                    </button>
            </Link>

            <br />
            <br />
            <a
                style={{ textDecoration: "none", marginLeft:"600px" }}
                href="https://clockify.me/customers"
            >
                <img
                    src="https://clockify.me/assets/images/signed-up-icon.svg"
                    alt=""
                />
        146,047 people signed up last month
      </a>
        </div>
  
  )
}

export default EighthPart