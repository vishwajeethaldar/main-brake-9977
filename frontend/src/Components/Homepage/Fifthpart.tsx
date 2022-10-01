import React from 'react'
import { Link } from 'react-router-dom'
import "./FifthPart.css"
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react"

const Fifthpart = () => {
  return (
    <Box>
      <Flex width={["96%", "96%", "70%", "70%"]} mx={"auto"} direction={["column", "column", "row", "row"]} gap={"30px"} justify={"center"}>
        <Flex px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
          <Text marginBottom={"15px"} fontSize={"2em"}>TIMEKEEPING</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Timer</Text>
          <Text marginBottom={"10px"}>Track work hours in real time</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Timesheet</Text>
          <Text marginBottom={"10px"}>Enter time in weekly timesheet</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Calender</Text>
          <Text marginBottom={"10px"}>Visually block out and manage time</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Autotracker</Text>
          <Text marginBottom={"10px"}>Track apps and website you use</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Kiosk</Text>
          <Text marginBottom={"10px"}>Clock in form a shared device</Text>
        </Flex>

        <Box width={["100%", "100%", "60%", "60%"]}>
          <Image width={"100%"} src='https://clockify.me/assets/images/feature-time-tracker-methods.svg' />
        </Box>
      </Flex>


      {/* REPORTING */}

      <Flex width={["96%", "96%", "70%", "70%"]} mx={"auto"} direction={["column", "column", "row", "row"]} gap={"30px"} justify={"center"}>
      <Box width={["100%", "100%", "60%", "60%"]}>
          <Image width={"100%"} src='https://clockify.me/assets/images/feature-time-reporting-activity.svg' />
        </Box>


        <Flex px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
          <Text marginBottom={"15px"} fontSize={"2em"}>REPORTING</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Reports</Text>
          <Text marginBottom={"10px"}>Analyze and export tracked time.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Activity</Text>
          <Text marginBottom={"10px"}>See who works on what.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Rates</Text>
          <Text marginBottom={"10px"}>See earnings, cost, and profit.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Progress</Text>
          <Text marginBottom={"10px"}>See earnings, cost, and profit.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Location</Text>
          <Text marginBottom={"10px"}>See visited sites and routes.</Text>
        </Flex>

        
      </Flex>

      {/* MANAGEMENT */}

      <Flex width={["96%", "96%", "70%", "70%"]} mx={"auto"} direction={["column", "column", "row", "row"]} gap={"30px"} justify={"center"}>
        <Flex px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
          <Text marginBottom={"15px"} fontSize={"2em"}>TIMEKEEPING</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Timer</Text>
          <Text marginBottom={"10px"}>Track work hours in real time</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Timesheet</Text>
          <Text marginBottom={"10px"}>Enter time in weekly timesheet</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Calender</Text>
          <Text marginBottom={"10px"}>Visually block out and manage time</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Autotracker</Text>
          <Text marginBottom={"10px"}>Track apps and website you use</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Kiosk</Text>
          <Text marginBottom={"10px"}>Clock in form a shared device</Text>
        </Flex>

        <Box width={["100%", "100%", "60%", "60%"]}>
          <Image width={"100%"} src='https://clockify.me/assets/images/feature-team-scheduling.svg' />
        </Box>
      </Flex>
      




      {/* <div className='maindiv'>
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

      </div> */}

      {/* REPORTING STARTS HERE */}

      {/* <div className='maindiv'>
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
            marginLeft: "190px",

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

      {/* <div className='maindiv'>
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



      </div> */}


      {/* <Link to={`/features`} style={{ textDecoration: "none" }}><button className='featbtn'>SEE ALL FEATURES</button></Link> */} 
 

      <Button mx={"auto"} display={"block"} colorScheme={"twitter"}>
          SEE ALL FEATURES
          </Button>
    </Box>


  )
}

export default Fifthpart