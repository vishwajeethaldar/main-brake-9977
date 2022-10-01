import React from 'react'
import DownloadData from "../Components/DownloadsPage/DownloadData"
import NavbarHome from '../Components/Navbar/NavbarHome'
import { Flex, Stack, Text, Box, Button, Image, Link } from "@chakra-ui/react"
import EighthPart from '../Components/Homepage/EighthPart'
import Footer from '../Components/Homepage/Footer'


const Downloads = () => {
    return (
        <div>
            <NavbarHome />

            <Box>
                <Flex marginTop={"40px"}>
                    <Flex width={"100%"} align={"center"} gap={"15px"} direction={"column"}>
                        <Text fontSize={"2.5em"}>Time tracking apps</Text>
                        <Text textAlign={"center"} fontSize={"1em"} >Install Clockify and track time from anywhere — everything is synced online.</Text>
                    </Flex>




                </Flex>
                <Flex width={"100%"} justify={"center"} py={"30px"} gap={"9px"}>
                    <Link _hover={{ color: "#03A9F4" }}>   <Text fontSize={"18px"} color={"#03A9F4"}>Chrome </Text></Link>
                    <Link _hover={{ color: "#03A9F4" }} > <Text fontSize={"18px"} color={"#03A9F4"}> •</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }} >  <Text fontSize={"18px"} color={"#03A9F4"}> Firefox</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }}> <Text fontSize={"18px"} color={"#03A9F4"}>•</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }}>  <Text fontSize={"18px"} color={"#03A9F4"}>Edge</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }}> <Text fontSize={"18px"} color={"#03A9F4"}> •</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }}>  <Text fontSize={"18px"} color={"#03A9F4"}> MAC</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }} > <Text fontSize={"18px"} color={"#03A9F4"}>•</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }} >  <Text fontSize={"18px"} color={"#03A9F4"}>Windows</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }} > <Text fontSize={"18px"} color={"#03A9F4"}>•</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }}> <Text fontSize={"18px"} color={"#03A9F4"}>Linux</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }} >  <Text fontSize={"18px"} color={"#03A9F4"}>•</Text></Link>

                    <Link _hover={{ color: "#03A9F4" }} >  <Text fontSize={"18px"} color={"#03A9F4"}>Android</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }} >  <Text fontSize={"18px"} color={"#03A9F4"}>•</Text></Link>
                    <Link _hover={{ color: "#03A9F4" }}>   <Text fontSize={"18px"} color={"#03A9F4"}>iOS</Text></Link>
                </Flex>





                <Flex gap={"50px"} align={"center"} justify={"center"} direction={["column", "column", "row", "row"]} width={"100%"}>
                    <Image width={["90%", "90%", "30%", "30"]} src='https://clockify.me/assets/images/clockify-apps-extension.png' />
                    <Stack width={["90%", "90%", "30%", "30"]}>
                        <Text color={"#3D4853"} fontSize={"34px"}>
                            Browser extension</Text>
                        <Text fontSize={"16px"} color={"#5a6b7b"} >Track time via extension.</Text>

                        <Flex py={"25px"} wrap={"wrap"} gap={"10px"}>
                      <Link width={"40%"} href='https://clockify.me/chrome-time-tracking'>     <Image   transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/chrome-store.svg'  /></Link> 
                           <Link width={"40%"} href='https://clockify.me/firefox-time-tracking' ><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/firefox-store.svg' /></Link> 
                           <Link width={"40%"} href='https://clockify.me/edge-time-tracking' ><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/edge-store.svg' /></Link> 
                        </Flex>
                    </Stack>
                </Flex>


                {/* 2) */}


                <Flex marginTop={"245px"} gap={"50px"} align={"center"} justify={"center"} direction={["column", "column", "row", "row"]} width={"100%"}>
                    <Image width={["90%", "90%", "30%", "30"]} src='https://clockify.me/assets/images/clockify-apps-desktop.png' />
                    <Stack width={["90%", "90%", "30%", "30"]}>
                        <Text color={"#3D4853"} fontSize={"34px"}>
                            Desktop app</Text>
                        <Text fontSize={"16px"} color={"#5a6b7b"} >Track time on your computer.</Text>

                        <Flex py={"25px"} wrap={"wrap"} gap={"10px"}>
                            <Link href='http://127.0.0.1:5173/downloads' width={"40%"} ><Image transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/download-app-mac.svg' /></Link>
                            <Link href='https://clockify.me/windows-time-tracking' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/download-app-windows.svg' /></Link>
                            <Link href='https://clockify.me/linux-time-tracking' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/download-app-linux.svg' /></Link>
                        </Flex>
                    </Stack>
                </Flex>



                {/* 3) */}

                <Flex marginTop={"245px"} gap={"50px"} align={"center"} justify={"center"} direction={["column", "column", "row", "row"]} width={"100%"}>
                    <Image width={["90%", "90%", "30%", "30"]} src='https://clockify.me/assets/images/clockify-apps-mobile.png' />
                    <Stack width={["90%", "90%", "30%", "30"]}>
                        <Text color={"#3D4853"} fontSize={"34px"}>

                            Mobile app</Text>
                        <Text fontSize={"16px"} color={"#5a6b7b"} >Track time and expenses on your phone.</Text>

                        <Flex py={"25px"} wrap={"wrap"} gap={"10px"}>
                             <Link href='https://clockify.me/iphone-time-tracking' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/app-store-ios.svg' /></Link>
                             <Link href='https://clockify.me/android-time-tracking' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/play-store-android.svg' /></Link>
                            {/* <Image width={"40%"} src='https://clockify.me/assets/images/download-app-linux.svg' /> */}
                        </Flex>
                    </Stack>
                </Flex>


                {/* 4) */}

                <Flex marginTop={"245px"} gap={"50px"} align={"center"} justify={"center"} direction={["column", "column", "row", "row"]} width={"100%"}>
                    <Image width={["90%", "90%", "30%", "30"]} src='https://clockify.me/assets/images/pumble-apps.png' />
                    <Stack width={["90%", "90%", "30%", "30"]}>
                        <Text color={"#3D4853"} fontSize={"34px"}>

                            Chat app</Text>
                        <Text fontSize={"16px"} color={"#5a6b7b"} >Chat via Pumble app (desktop and mobile).</Text>

                        <Flex transition={"transform .2s"} py={"25px"} wrap={"wrap"} gap={"10px"}>
                             <Link href='https://pumble.com/apps#mobile' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/app-store-ios.svg' /></Link>
                             <Link href='https://pumble.com/apps#mobile' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/play-store-android.svg' /></Link>
                             <Link href='https://pumble.com/apps#desktop' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/download-app-mac.svg' /></Link>
                             <Link href='https://pumble.com/apps#desktop' width={"40%"}><Image  transition={"all 0.3s"} _hover={{ transform:"scale(1.05)"}} width={"100%"} src='https://clockify.me/assets/images/download-app-windows.svg' /></Link>
                        </Flex>
                    </Stack>
                </Flex>

                {/* 5) */}

                <Flex marginTop={"245px"} gap={"50px"} align={"center"} justify={"center"} direction={["column", "column", "row", "row"]} width={"100%"}>
                    <Image width={["90%", "90%", "30%", "30"]} src='https://clockify.me/assets/images/clockify-apps-kiosk.png' />
                    <Stack width={["90%", "90%", "30%", "30"]}>
                        <Text color={"#3D4853"} fontSize={"34px"}>
                        Kiosk</Text>
                        <Text fontSize={"16px"} color={"#5a6b7b"} >Set up a shared time clock kiosk on any device.</Text>

                        <Flex py={"25px"} wrap={"wrap"} gap={"10px"}>
                            {/* <Image width={"40%"} src='https://clockify.me/assets/images/download-app-mac.svg' />
                            <Image width={"40%"} src='https://clockify.me/assets/images/download-app-windows.svg' />
                            <Image width={"40%"} src='https://clockify.me/assets/images/download-app-linux.svg' /> */}


                            <Text fontSize={"18px"} color={"#5A6B7B"}> Tablet</Text>
                            <Text fontSize={"18px"} color={"#5A6B7B"}> •</Text>
                            <Text fontSize={"18px"} color={"#5A6B7B"}> Phone</Text>
                            <Text fontSize={"18px"} color={"#5A6B7B"}> •</Text>
                            <Text fontSize={"18px"} color={"#5A6B7B"}> Computer</Text>


                            
                        </Flex>
                    </Stack>
                </Flex>


            </Box>
            <EighthPart/>
            <Footer/>
        </div>
    )
}

export default Downloads