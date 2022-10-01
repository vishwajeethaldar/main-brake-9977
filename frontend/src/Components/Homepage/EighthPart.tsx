import React from 'react'
import { SECOND_PAGE_H1, SECOND_PAGE_H2 } from './Homepagecss'
import { Link } from "react-router-dom";
import "./EightPart.css"
import { Flex, Stack, Text, Box, Button, Image } from "@chakra-ui/react"

const EighthPart = () => {
  return (

    //     <div style={{ marginTop: "150px", border:"2px solid green", height:"400px" }}>
    //       <br />
    //       <br />
    //       <br />
    //       <br />

    //       <SECOND_PAGE_H1 style={{
    //           fontFamily:"sans-serif"
    //       }}>
    //           Start tracking time with Clockify
    // </SECOND_PAGE_H1>

    //           <p className='support'>
    //         <div style={{marginRight:"45px"}}> 24/7 Support</div>

    //         <div  style={{marginRight:"45px"}}>  •</div>

    //          <div  style={{marginRight:"45px"}}> Cancel anytime</div>

    //           <div  style={{marginRight:"45px"}}>•</div>

    //         <div  style={{marginRight:"45px"}}>  Free forever</div>
    //           </p>


    //       <Link to={`/signup`} style={{ textDecoration: "none" }}>
    //           <button className='freeacc'>
    //               CREATE FREE ACCOUNT
    //               </button>
    //       </Link>

    //       <br />
    //       <br />
    //       <a
    //           style={{ textDecoration: "none", marginLeft:"600px" }}
    //           href="https://clockify.me/customers"
    //       >
    //           <img
    //               src="https://clockify.me/assets/images/signed-up-icon.svg"
    //               alt=""
    //           />
    //   146,047 people signed up last month
    // </a>
    //   </div>
    <Box>
      <Flex py={"100px"} align={"center"} direction={"column"}>
        <Text marginBottom="15px" align={"center"} fontSize={"34px"}>  Start tracking time with Clockify</Text>
        <Flex py={"30px"} gap={"30px"}>
          <Text>24/7 Support</Text>
          <Text> •</Text>
          <Text>Cancel anytime</Text>
          <Text>•</Text>
          <Text>  Free forever</Text>
        </Flex>

        <Link to={"/signup"}>
          <Button colorScheme={"twitter"}>
            CREATE FREE ACCOUNT
          </Button></Link>
        <a target={"_blank"} href={"https://clockify.me/customers"}>  <Flex marginTop={"25px"} align={"center"}>
          <Image  src='https://clockify.me/assets/images/signed-up-icon.svg' />
          <Text >146,047 people signed up last month</Text>
        </Flex>
        </a>

      </Flex>
    </Box>

  )
}

export default EighthPart