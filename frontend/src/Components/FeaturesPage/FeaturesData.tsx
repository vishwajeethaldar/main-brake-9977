import React from 'react'
import "./FeaturesData.css"
import EighthPart from '../Homepage/EighthPart'
import Footer from '../Homepage/Footer'
import { Flex, Stack, Text, Box, Button, Image, Link } from "@chakra-ui/react"

const FeaturesData = () => {
    return (
        <>
        <Flex direction={"column"} align={"center"} width={"100%"}>
          
                <Text marginTop={"100px"} fontSize={"2.5em"} textAlign={"center"} >Time tracker</Text>
                <Text fontSize={"18px"} textAlign={"center"} >Start and stop timer as you work, or enter hours manually.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-tracker-screenshot.svg" alt="" /> */}
                <Image width={"75%"} src='https://clockify.me/assets/images/features/features-tracker-screenshot.svg' />


                <Flex gap={"45px"} >
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Timer</Text>
                        <Text>Track time using a stopwatch.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Add Time</Text>
                        <Text>Enter and edit hours manually.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Continue</Text>
                        <Text>Continue tracking with one click.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Billable</Text>
                        <Text>Mark hours as billable.</Text>
                    </Box>
                </Flex>



         

            {/* TIMESHEET */}
            
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"} className='timetracker'>Time Sheet</Text>
                <Text marginTop={"10px"} fontSize={"1.17em"} textAlign={"center"}>Log your weekly activities in less than a minute.</Text>
                {/* <img  className='ttimg' src="https://clockify.me/assets/images/features/features-timesheet-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-timesheet-screenshot.svg' />


                <Flex gap={"45px"} >
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Activities</Text>
                        <Text>Select activity and enter time.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Templates</Text>
                        <Text>Select activity and enter time.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Approval</Text>
                        <Text>Submit and approve timesheets</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Reminders</Text>
                        <Text>Reminder for due timesheets.</Text>
                    </Box>
                </Flex>





            {/* KIOSK */}
          
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}   className='timetracker'>Kiosk</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Clock in with your PIN code from a shared device.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-kiosk-screenshot.png" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-kiosk-screenshot.png' />


                <Flex gap={"45px"} className='feattextbox'>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Clock-In</Text>
                        <Text>Punch in from a shared device.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Breakes</Text>
                        <Text>Track employee breaks.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>PIN</Text>
                        <Text>Sign in with personal code.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Activity</Text>
                        <Text>See how much you've worked.</Text>
                    </Box>
                </Flex>



        


            {/* CALENDER */}

           
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'>Calendar</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Visualize your time and block out activities.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-calendar-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-calendar-screenshot.svg' />


                <Flex  gap={"45px"}>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Visualize</Text>
                        <Text>See how your day looks like.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Add</Text>
                        <Text>Block hours with a click.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Edit</Text>
                        <Text>Edit blocks by resizing.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Connect</Text>
                        <Text>Edit blocks by resizing.</Text>
                    </Box>
                </Flex>



           

            {/* DASHBOARD */}
            
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'>Dashboard</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>See where you spend time and what your team is working on.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-dashboard-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-dashboard-screenshot.svg' />


                <Flex gap={"45px"} >
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Activities</Text>
                        <Text>See where you spend most time.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Charts</Text>
                        <Text>All time and money at a glance.</Text>
                    </Box>
                    <Box  >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Breakdown</Text>
                        <Text>All time and money at a glance.</Text>
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"}  >Status</Text>
                        <Text>See who currently works on what.</Text>
                    </Box>
                </Flex>



           

            {/* PROJECTS */}


          
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'>Projects</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Track time on projects, and keep an eye on progress and budget.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-projects-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-projects-screenshot.svg' />


                <Flex gap={"45px"}>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"}>Task</Text>
                        <Text>Categorize by job type.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>Rates</Text>
                        <Text>Multiple levels of hourly rates.</Text>
                    </Box>
                    <Box  >
                        <Text fontWeight={"bold"} fontSize={"20px"}>Budget</Text>
                        <Text>Set budget or time estimate.</Text>
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"}>Alerts</Text>
                        <Text>Get notified when close to budget.</Text>
                    </Box>
                </Flex>



         


            {/* TEAM */}

        
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'>Team</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Invite your team to track time in your account.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-team-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-team-screenshot.svg' />


                <Flex  gap={"45px"}>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"}  >Invite Team</Text>
                        <Text>Unlimited number of users, free.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Rates</Text>
                        <Text>Set per user hourly rates.</Text>
                    </Box>
                    <Box  >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Manager</Text>
                        <Text>Give additional permissions.</Text>
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Groups</Text>
                        <Text>Manage access using groups.</Text>
                    </Box>
                </Flex>



           

            {/* TIME OFF */}


           
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'>Time off</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Track your team's holidays and time off requests.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-timeoff-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-timeoff-screenshot.svg' />


                <Flex gap={"45px"} >
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Policies</Text>
                        <Text>Create time off policies.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Holidays</Text>
                        <Text>Define holidays for paid leaves.</Text>
                    </Box>
                    <Box  >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Requests</Text>
                        <Text>Request and approve leaves.</Text>
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Balance</Text>
                        <Text>Track available days/hours.</Text>
                    </Box>
                </Flex>



          

            {/* APPROVAL */}
            
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'> Approval</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Officially approve your team's timesheets and expenses.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-approval-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-approval-screenshot.svg' />


                <Flex  gap={"45px"}>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Submit</Text>
                        <Text>Submit timesheets with one click.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Reminders</Text>
                        <Text>Send late timesheet reminders.</Text>
                    </Box>
                    <Box  >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Immutable</Text>
                        <Text>Prevent further changes.</Text>
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >History</Text>
                        <Text>See all requests in one place.</Text>
                    </Box>
                </Flex>



          

            {/* EXPENSES */}

          
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'> Expenses</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Record fixed-fees and other project expenses.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-expenses-screenshot.svg" alt="" /> */}
                <Image src='https://clockify.me/assets/images/features/features-expenses-screenshot.svg' />


                <Flex gap={"45px"}>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Track</Text>
                        <Text>Record by sum or unit.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"} >Types</Text>
                        <Text>Record by sum or unit.</Text>
                    </Box>
                    <Box  >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Receipts</Text>
                        <Text>Attach expense receipts.</Text>
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"} >Reports</Text>
                        <Text>Analyze and export expenses.</Text>
                    </Box>
                </Flex>



 
            {/* INVOICING */}



            
                <Text marginTop={"135px"} fontSize={"2.5em"} textAlign={"center"}  className='timetracker'> Invoicing</Text>
                <Text fontSize={"18px"} textAlign={"center"}  className='features_page__text_center'>Issue invoices based on tracked time, expenses, and hourly rates.</Text>
                {/* <img className='ttimg' src="https://clockify.me/assets/images/features/features-invoicing-screenshot.svg" alt="" /> */}
                   
                    
                             <Image src='https://clockify.me/assets/images/features/features-invoicing-screenshot.svg' />
                

                <Flex gap={"45px"}>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"}>Create</Text>
                        <Text>Import time and edit invoices.</Text>
                    </Box>
                    <Box>
                        <Text fontWeight={"bold"} fontSize={"20px"}>PDF</Text>
                        <Text>Download and send to client.</Text>
                    </Box>
                    <Box  >
                        <Text fontWeight={"bold"} fontSize={"20px"}>Customize</Text>
                        <Text>Add company logo and notes.</Text>
                    </Box>
                    <Box >
                        <Text fontWeight={"bold"} fontSize={"20px"}>Expenses</Text>
                        <Text>Record and invoice fixed fees.</Text>
                    </Box>
                </Flex>





         
            <EighthPart />
            </Flex>
            <Footer />


            </>









       
    )
}

export default FeaturesData