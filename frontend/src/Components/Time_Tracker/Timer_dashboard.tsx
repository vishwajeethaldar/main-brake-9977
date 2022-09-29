import React from 'react'
import { Box, Flex, Input ,Button, Text} from '@chakra-ui/react'
import {GrAddCircle} from "react-icons/gr"
import {AiFillTag} from "react-icons/ai"
import {BsCurrencyDollar} from "react-icons/bs"
import {IoEllipsisVertical,IoAddCircleSharp} from "react-icons/io5"
export const Timer_dashboard = () => {
  return (
    <Box position={"sticky"} zIndex="3px" top={"50px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} bg={"rgb(255,255,255)"} padding="20px" display={"flex"} flexDirection="column" gap={"15px"}>
        <Flex>
            <Input placeholder='What are you working on?'/>
            <Button bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}} gap={"10px"}><IoAddCircleSharp color='#03a9f4' fontSize={"30px"}/><Text color={"#03a9f4"}>Project</Text></Button>
        </Flex>
        <Flex alignItems={"center"} justifyContent="space-between">
            <Flex justifyContent="space-between" width={"40%"}>
            <Button bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}}><AiFillTag color='grey' fontSize={"30px"}/></Button>
            <Button bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}}><BsCurrencyDollar color='#03a9f4' fontSize={"30px"}/></Button>
            </Flex>
            <Flex justifyContent="space-between" width={"25%"} alignItems={"center"}>
            <Box><Text>00:00:00</Text></Box>
            <Button bg={"#03a9f4"} _active={{bg:"none"}} _hover={{bg:"none"}}><Text fontSize={"4xs"} color={"white"}>START</Text></Button>
            <Button bg={"none"} _active={{bg:"none"}} _hover={{bg:"none"}}><IoEllipsisVertical fontSize={"30px"} color="grey"/></Button>
            </Flex>
        </Flex>
    </Box>
  )
}
