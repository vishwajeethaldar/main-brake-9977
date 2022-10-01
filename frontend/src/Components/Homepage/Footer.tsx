import React from 'react'
import { Flex, Stack, Text, Box, Button, Image, Link } from "@chakra-ui/react"


const Footer = () => {
    return (
        <div>
            <Box>
                <Flex px={["20px", "20px", "50px", "50px"]} justify={"center"} direction={["column", "column", "row", "row"]}>
                    <Flex width={["100%", "100%", "40%", "40%"]} direction={"column"}>
                        <Link href={"/"}><Image width={"30%"} src='https://clockify.me/assets/images/clockify-logo.svg' /></Link>
                        <Text my={"15px"} width={"60%"}>The world's leading time tracker and timesheet software for teams</Text>
                        <Link _hover={{ textDecoration: "none" }} href={"/signup"}>         <Text _hover={{ color: "#03A9F4" }} marginBottom={"25px"}>SIGN UP FREE</Text></Link>
                        <Link _hover={{ textDecoration: "none" }} href={"/login"}>     <Text _hover={{ color: "#03A9F4" }}>LOG IN</Text></Link>

                    </Flex>
                    <Flex justify={"center"} width={["100%", "100%", "60%", "60%"]} direction={["row", "row", "row", "row"]} gap={"10%"}>
                        <Flex align={"center"} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Product</Text>
                            <Text>Features</Text>
                            <Text>Download</Text>
                            <Text>Integration</Text>
                            <Text>Upgrade</Text>
                            <Text>API</Text>
                        </Flex>


                        <Flex gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Solution</Text>
                            <Text>Time Keeping</Text>
                            <Text>Time Management</Text>
                            <Text>Reporting</Text>
                            <Text>Business</Text>
                            <Text>Calcuators</Text>
                        </Flex>


                        <Flex gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Company</Text>
                            <Text>About Us</Text>
                            <Text>Customers</Text>
                            <Text>We also make</Text>
                            <Text>Pumble</Text>
                            <Text>Plaky</Text>
                        </Flex>


                        <Flex gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Support</Text>
                            <Text>Help</Text>
                            <Text>Tutorials</Text>
                            <Text>Resource</Text>
                            <Text>Blog</Text>
                            <Text>Contact</Text>
                        </Flex>



                    </Flex>
                </Flex>


                <Flex  marginLeft={"30px"} width={"100%"} justify={"left"} py={"30px"} gap={"29px"}>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>© 2022 Clockify </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Sitemap </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>Cookies </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>Terms </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>Privacy </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Security </Text>
                </Flex>
            </Box>
        </div>
    )
}

export default Footer