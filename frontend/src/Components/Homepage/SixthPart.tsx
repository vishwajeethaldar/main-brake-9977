import React from 'react'
import { SECOND_PAGE_H1, SECOND_PAGE_H2 } from './Homepagecss'
import "./SixthPart.css"
import { Flex, Stack, Text, Box, Button, Image } from "@chakra-ui/react"

const SixthPage = () => {
  return (
    <div>
      <Flex align={"center"} gap={"15px"} direction={"column"}>
        <Text fontSize={"2.5em"}>Time tracking apps</Text>
        <Text textAlign={"center"} fontSize={"1em"} width={["35%"]}>Clockify works across devices. Track time from anywhere — all data is synced online.</Text>
      </Flex>



      <Flex my={"40px"} mx={"auto"} width={["96%", "96%", "80%", "80%"]} direction={["column", "column", "row", "row"]} >

        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
            <Image src='https://clockify.me/assets/images/time-tracking-app-desktop.png' width={"100%"}/>
          </Box>
          <Text textAlign={"center"}>DESKTOP APP</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button colorScheme={"twitter"} variant={"outline"}>Windows</Button><Button colorScheme={"twitter"} variant={"outline"}>MAC</Button><Button colorScheme={"twitter"} variant={"outline"}>LINUX</Button>
          </Flex>
        </Stack>



        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
          <Image src='https://clockify.me/assets/images/time-tracking-app-web.png' width={"100%"}/>
          </Box>
          <Text textAlign={"center"}>WEB APP</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button colorScheme={"twitter"} variant={"outline"}>EDGE</Button><Button colorScheme={"twitter"} variant={"outline"}>CHROME</Button><Button colorScheme={"twitter"} variant={"outline"}>FIREFOX</Button>
          </Flex>
        </Stack>
      </Flex>


      {/* SECOND FLEX */}

      <Flex my={"40px"} mx={"auto"} width={["96%", "96%", "80%", "80%"]} direction={["column", "column", "row", "row"]} >

        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
            <Image src='https://clockify.me/assets/images/time-tracking-app-mobile.png' width={"100%"}/>
          </Box>
          <Text textAlign={"center"}>MOBILE APP</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button colorScheme={"twitter"} variant={"outline"}>Android</Button><Button colorScheme={"twitter"} variant={"outline"}>iOS</Button><Button colorScheme={"twitter"} variant={"outline"}>LINUX</Button>
          </Flex>
        </Stack>



        <Stack width={["100%", "100%", "50%", "50%"]}>
          <Box width={"100%"}>
          <Image src='https://clockify.me/assets/images/time-tracking-app-kiosk.png' width={"100%"}/>
          </Box>
          <Text textAlign={"center"}>KIOSK</Text>
          <Flex justify={"center"} width={"100%"} align={"center"} gap={"20px"}>
            <Button colorScheme={"twitter"} variant={"outline"}>Any Device</Button><Button colorScheme={"twitter"} variant={"outline"}>CHROME</Button><Button colorScheme={"twitter"} variant={"outline"}>FIREFOX</Button>
          </Flex>
        </Stack>
      </Flex>


{/* 
      APPS

      <div className='appfirstdiv'>
        <div>
          <img src="https://clockify.me/assets/images/time-tracking-app-desktop.png" alt="" />
          <h3 style={{
            textAlign: "center"
          }}>DESKTOP APP</h3>
          <button className='appbtns'><a href="https://clockify.me/windows-time-tracking" style={{ textDecoration: "none" }}>Windows</a></button>
          <button className='appbtns'><a href="https://clockify.me/mac-time-tracking" style={{ textDecoration: "none" }}>Mac</a></button>
          <button className='appbtns'><a href="https://clockify.me/linux-time-tracking" style={{ textDecoration: "none" }}>Linux</a></button>


        </div> */}

{/* 
        <div>
          <img style={{
            marginLeft: "55px",
          }} src="https://clockify.me/assets/images/time-tracking-app-web.png" alt="" />
          <h3 style={{
            textAlign: "center",
            marginLeft: "55px"

          }}>WEB APP</h3>
          <button style={{ marginLeft: "128px" }} className='appbtns'><a href="https://clockify.me/windows-time-tracking" style={{ textDecoration: "none" }}>Edge</a></button>
          <button style={{ marginLeft: "24px" }} className='appbtns'><a href="https://clockify.me/mac-time-tracking" style={{ textDecoration: "none" }}>Chrome</a></button>
          <button style={{ marginLeft: "24px" }} className='appbtns'><a href="https://clockify.me/linux-time-tracking" style={{ textDecoration: "none" }}>Firefox</a></button>


        </div> */}
      {/* </div>


      MOBILE AND KIOSK  */}

      
    </div>
  )
}

export default SixthPage