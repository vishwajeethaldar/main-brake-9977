import React from 'react'
import {Flex, Image, Text, Divider, Button} from "@chakra-ui/react"
import {AiFillAndroid, AiFillApple, AiFillChrome, AiFillWindows} from "react-icons/ai"
const Default = () => {
  return (
    <Flex boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} bg={"white"} flexDirection={"column"} gap="10px" paddingTop={"15px"} paddingBottom="15px" margin="auto" textAlign={"center"} width="30%" marginTop={"50px"}>
        <Flex flexDirection={"column"} gap="15px">
        <Image margin={"auto"} width={"40%"} src='https://app.clockify.me/assets/ui-icons/empty-tracker-icon.webp'/>
        <Text fontSize={"2xl"}>Let’s start tracking!</Text>
        <Text fontSize={"sm"} color="grey">Install Clockify and track time anywhere.</Text>
        </Flex>
        <Flex margin={"auto"} width={"50%"} gap="10px">
            <AiFillAndroid cursor={"pointer"} fontSize="60px" color='grey'/>
            <AiFillApple cursor={"pointer"} fontSize="60px" color='grey'/>
            <AiFillChrome cursor={"pointer"} fontSize="60px" color='grey'/>
            <AiFillWindows cursor={"pointer"} fontSize="60px" color='grey'/>
        </Flex>
        <Text fontSize={"sm"} color="grey">50+ integrations </Text>
        <Divider color={"black"} orientation='horizontal' />
        <Text cursor={"pointer"} _hover={{textDecoration:"underline",textDecorationColor:"#03a9f4"}} color={"#03a9f4"} fontSize="sm">Enable timesheet mode</Text>
    </Flex>
  )
}

export default Default