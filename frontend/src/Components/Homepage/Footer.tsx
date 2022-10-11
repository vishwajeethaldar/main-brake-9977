import React from 'react';
import { Flex, Stack, Text, Box, Button, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Box maxW={"100vw"} mx="auto">
            <Box w={"100%"} paddingTop={"20px"} border={"1px solid #CCC"}>
                <Flex w={"100%"} px={["20px", "20px", "50px", "8    0px"]} justify={"center"} direction={["column", "column", "row", "row"]}>
                    <Flex width={["100%", "100%", "30%", "20%"]} direction={"column"}>
                        <Link to={"/"}><Image width={"50%"} src='https://clockify.me/assets/images/clockify-logo.svg' /></Link>
                        <Text my={"18px"} width={"100%"}>The world's leading time tracker and timesheet software for teams</Text>
                        <Flex direction={["row","row", "column","column"]} gap="10px">
                        <Link  to={"/signup"}>   <Text  textAlign={"center"} _hover={{color: "#03A9F4", cursor:"pointer"}} py="6px" px="6px" borderRadius={"5px"}  w={"150px"} border={"1px solid #654"}  marginBottom={"10px"}>SIGN UP FREE</Text></Link>
                        <Link  to={"/login"}>     <Text textAlign={"center"}  _hover={{color: "#03A9F4", cursor:"pointer"}} py="6px" px="6px" borderRadius={"5px"} w={"150px"}  border={"1px solid #654"} >LOG IN</Text></Link>
                        </Flex>
                    </Flex>
                    <Flex justify={"center"} width={["100%", "100%", "64%", "75%"]} wrap={"wrap"} gap={"15px"}>
                        <Flex  w={["45%","45%","20%","20%"]} align={"center"} gap={"12px"} direction={"column"} >
                            <Text fontWeight={"bold"}>Product</Text>
                            <Text>Features</Text>
                            <Text>Download</Text>
                            <Text>Integration</Text>
                            <Text>Upgrade</Text>
                            <Text>API</Text>
                        </Flex>
                        <Flex align={"center"} w={["45%","45%","20%","20%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Solution</Text>
                            <Text>Time Keeping</Text>
                            <Text>Time Management</Text>
                            <Text>Reporting</Text>
                            <Text>Business</Text>
                            <Text>Calcuators</Text>
                        </Flex>


                        <Flex  align={"center"} w={["45%","45%","20%","20%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Company</Text>
                            <Text>About Us</Text>
                            <Text>Customers</Text>
                            <Text>We also make</Text>
                            <Text>Pumble</Text>
                            <Text>Plaky</Text>
                        </Flex>


                        <Flex align={"center"} w={["45%","45%","20%","20%"]} gap={"12px"} direction={"column"}>
                            <Text fontWeight={"bold"}>Support</Text>
                            <Text>Help</Text>
                            <Text>Tutorials</Text>
                            <Text>Resource</Text>
                            <Text>Blog</Text>
                            <Text>Contact</Text>
                        </Flex>
                    </Flex>
                </Flex>


                <Flex  wrap={"wrap"}  width={"98%"} justify={"center"} py={"30px"} gap={"20px"} >
                    
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        © 2022 Clockify 
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Sitemap 
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Cookies 
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Terms 
                    </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>Privacy </Text>
                    <Text cursor={"pointer"} _hover={{ color: "#03A9F4" }}  fontSize={"18px"} color={"#7F9CAD"}>
                        Security 
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default Footer