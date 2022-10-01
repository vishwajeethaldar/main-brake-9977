import React from 'react'
import { Link } from 'react-router-dom'
import "./FifthPart.css"
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react"

const Fifthpart = () => {
  return (
    <Box>
      <Flex width={["96%", "96%", "70%", "70%"]} mx={"auto"} direction={["column", "column", "row", "row"]} gap={"30px"} justify={"center"}>
        <Flex marginTop={"40px"} px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
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


        <Flex marginTop={"50px"}  px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
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
        <Flex marginTop={"50px"}  px={["30px", "30px", "15px", "15px"]} gap={"5px"} direction={"column"} width={["100%", "100%", "40%", "40%"]}>
          <Text marginBottom={"15px"} fontSize={"2em"}>MANAGEMENT</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Scheduling </Text>
          <Text marginBottom={"10px"}>Schedule work, assignments, and shifts.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Time off </Text>
          <Text marginBottom={"10px"}>Manage leaves and holidays.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Approval</Text>
          <Text marginBottom={"10px"}>Submit and approve timesheets.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Invoiving</Text>
          <Text marginBottom={"10px"}>Create invoices from billable time.</Text>
          <Text fontSize={"20px"} fontWeight={"700"}>Expenses</Text>
          <Text marginBottom={"10px"}>Record project expenses and fees.</Text>
        </Flex>

        <Box width={["100%", "100%", "60%", "60%"]}>
          <Image width={"100%"} src='https://clockify.me/assets/images/feature-team-scheduling.svg' />
        </Box>
      </Flex>
      






 

      <Button marginTop={"45px"} mx={"auto"} display={"block"} colorScheme={"twitter"}>
          SEE ALL FEATURES
          </Button>
    </Box>


  )
}

export default Fifthpart